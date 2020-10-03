import React, { FC } from 'react';
import styled from '@emotion/styled';
import { COLORS } from '@src/styles';

const Wrapper = styled.label`
  display: inline-block;
`;

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

const VisiblePart = styled.div`
  cursor: pointer;
  font-weight: 700;
  padding: 3px 20px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid ${COLORS.lightGrey};

  &:hover,
  ${HiddenInput}:focus + & {
    border-color: ${COLORS.lightVioletSolid};
  }

  &:active {
    border-color: ${COLORS.violetSolid};
  }

  ${HiddenInput}:checked + & {
    background: ${COLORS.violet};
    color: ${COLORS.white};
  }
`;

interface Props {
  className?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: FC<Props> = ({ children, className, name, onChange }) => {
  return (
    <Wrapper>
      <HiddenInput name={name} type="checkbox" onChange={onChange} />
      <VisiblePart className={className}>{children}</VisiblePart>
    </Wrapper>
  );
};

export default Checkbox;
