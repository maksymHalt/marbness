import React, { FC, useState, useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import { noop, unionBy } from 'lodash';
import { COLORS } from '@src/styles';
import { addProps, FieldProps } from '@src/utils';
import Button from './Button';
import Text from './Text';
import { Attach } from './Icon';

const HiddenInput = styled.input<React.HTMLAttributes<HTMLInputElement>>`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

export interface AttachmentProps extends FieldProps {
  className?: string;
}

const Attachment: FC<AttachmentProps> = ({
  className,
  name,
  value = [],
  onChange,
  onBlur,
  touched,
  error
}) => {
  const [files, setFiles] = useState<File[]>(value);
  useEffect(() => {
    const syntheticEvent = { target: { name, value: files } };
    onChange(syntheticEvent);
  }, [files, onChange, name]);
  const onInputChange = useCallback((e) => {
    setFiles((files) => unionBy(files, e.target.files, 'name'));
  }, []);

  const handleRemoveFile = useCallback(
    (index) => () => {
      setFiles((files) => files.filter((_, i) => i !== index));
    },
    []
  );

  return (
    <>
      <AttachmentButton className={className} type="simple" as="label">
        <HiddenInput
          name={name}
          type="file"
          onChange={onInputChange}
          onBlur={onBlur}
          multiple
        />
        <VisiblePart>
          <Attach />
        </VisiblePart>
      </AttachmentButton>
      {touched && error && <Error>{error}</Error>}
      {files.length ? (
        <AttachedFileList>
          {files.map(({ name }, i) => (
            <AttachedFileItem key={name}>
              {name}
              <RemoveButton onClick={handleRemoveFile(i)}>✕</RemoveButton>
            </AttachedFileItem>
          ))}
        </AttachedFileList>
      ) : null}
    </>
  );
};

Attachment.defaultProps = {
  onChange: noop
};

export default Attachment;

const AttachmentButton = styled(Button)`
  position: absolute;
  top: 24px;
  right: 24px;
  color: ${COLORS.pinkSolid};
`;

const VisiblePart = styled.div`
  cursor: pointer;

  &:hover,
  ${HiddenInput}:focus + & {
    color: ${COLORS.lightVioletSolid};
  }

  &:active {
    color: ${COLORS.violetSolid};
  }

  ${HiddenInput}:checked + & {
    background: ${COLORS.violet};
    color: ${COLORS.white};
  }
`;

const AttachedFileList = styled.div``;
const AttachedFileItem = styled.div`
  display: inline-block;
  font-size: 13px;
  border: 1px solid ${COLORS.grey};
  border-radius: 5px;
  padding: 0 3px;
  margin-bottom: 5px;

  &:nth-last-of-type(n + 2) {
    margin-right: 5px;
  }
`;

const RemoveButton = styled(addProps(Button, { type: 'simple' }))`
  color: ${COLORS.red};
  margin-left: 5px;

  &:focus {
    color: ${COLORS.violetSolid};
    outline: none;
    text-decoration: underline;
  }
`;

const Error = styled(Text)`
  color: ${COLORS.red};
`;
