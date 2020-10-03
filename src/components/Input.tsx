import React, { FC } from 'react';
import styled from '@emotion/styled';
import { COLORS } from '@src/styles';
import { addProps, FieldProps } from '@src/utils';
import Text from './Text';

export interface InputProps extends FieldProps {
  className?: string;
  label?: string;
  as?: React.ElementType;
  value?: string;
}

const Input: FC<InputProps> = ({
  className,
  label,
  children,
  error,
  touched,
  ...props
}) => {
  return (
    <Wrapper className={className}>
      <TopLine>
        {label && <Label>{label}</Label>}
        {touched && error && <Error>{error}</Error>}
      </TopLine>
      <FieldWrapper>
        <Field {...props} />
        {children}
      </FieldWrapper>
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.label`
  display: block;
`;

const FieldWrapper = styled.div`
  position: relative;
`;

const TopLine = styled.div`
  display: flex;
  margin-bottom: 8px;

  > * {
    flex-grow: 1;
    flex-basis: auto;
    flex-shrink: 1;
    word-break: keep-all;
  }
`;

export const Label = styled(addProps(Text, { weight: 'bold' }))`
  color: ${COLORS.grey};
`;

const Error = styled(Text)`
  color: ${COLORS.red};
  text-align: right;
  margin-left: 10px;
`;

const Field = styled.input`
  width: 100%;
  padding: 15px;
  border-radius: 12px;
  border: 1px solid ${COLORS.lightGrey};

  &:focus {
    border-color: ${COLORS.violetSolid};
    outline: none;
  }
`;
