import React, { FC } from 'react';
import styled from '@emotion/styled';

type WeightType = 'normal' | 'bold';

interface BodyProp {
  weight?: WeightType;
}

const Body = styled.p<BodyProp>`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  font-weight: ${({ weight }) => weight};
`;
const BodyBig1 = styled(Body)`
  font-size: 16px;
`;
const BodyBig2 = styled(BodyBig1)`
  text-transform: uppercase;
`;
const Tiny = styled(Body)`
  font-size: 12px;
`;
const Caption = styled(Tiny)`
  line-height: 1.6;
  letter-spacing: 0.01em;
  text-transform: uppercase;
`;

const BigCaption = styled(Caption)`
  font-size: 16px;
`;

const TYPES = {
  body: Body,
  bodyBig1: BodyBig1,
  bodyBig2: BodyBig2,
  tiny: Tiny,
  caption: Caption,
  bigCaption: BigCaption
};

interface Props {
  /** Type of appearance text element */
  type?: keyof typeof TYPES;
  weight?: WeightType;
  as?: keyof HTMLElementTagNameMap;
}

const Text: FC<Props> = ({ type, ...props }) => {
  const T = TYPES[type];
  return <T {...props} />;
};

export default Text;

Text.defaultProps = {
  type: 'body',
  weight: 'normal',
  as: 'p'
};
