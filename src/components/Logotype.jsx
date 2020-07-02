import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from 'components/Icon';
import styled from '@emotion/styled';
import { FONTS } from 'styles';

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

const Logotype = ({ type }) => TYPES[type]();

export default Logotype;

Logotype.propTypes = {
  type: PropTypes.oneOf(Object.keys(TYPES))
};

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
