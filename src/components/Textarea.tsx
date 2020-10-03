import React, { FC } from 'react';
import styled from '@emotion/styled';
import TextareaAutosize from 'react-textarea-autosize';
import Attachment, { AttachmentProps } from './Attachment';
import Input, { InputProps } from './Input';

interface TextareaProps extends InputProps {
  attachmentProps: AttachmentProps;
}

const Textarea: FC<TextareaProps> = ({ attachmentProps, ...props }) => {
  return (
    <Input as={StyledTextarea} {...props}>
      {attachmentProps && <Attachment {...attachmentProps} />}
    </Input>
  );
};

export default Textarea;

const StyledTextarea = styled(TextareaAutosize)`
  resize: none;
  min-height: 72px;
`;
