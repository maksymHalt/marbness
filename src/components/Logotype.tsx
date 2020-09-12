import React, { FC } from 'react';
import { Logo } from '@src/components/Icon';
import styled from '@emotion/styled';
import { FONTS } from '@src/styles';

const TYPES = {
  oneLine() {
    return (
      <OneLineContainer>
        <Logo />
        <Label>Marbness</Label>
      </OneLineContainer>
    );
  },
  twoLines() {
    return (
      <TwoLinesContainer>
        <Logo />
        <Label>Marbness</Label>
      </TwoLinesContainer>
    );
  }
};

interface Props {
  type?: keyof typeof TYPES;
}

const Logotype: FC<Props> = ({ type }) => TYPES[type]();

export default Logotype;

Logotype.defaultProps = {
  type: 'oneLine'
};

const Label = styled.span`
  font-family: ${FONTS.rubik};
  font-weight: 700;
  font-size: 24px;
`;

const OneLineContainer = styled.div`
  display: flex;
  align-items: center;

  ${Label} {
    margin-left: 16px;
  }
`;
const TwoLinesContainer = styled.div`
  ${Label} {
    margin-top: 16px;
    display: block;
  }
`;
