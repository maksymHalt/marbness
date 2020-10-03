import styled from '@emotion/styled';
import ArrowRight from './icons/arrow-right.svg';
import AttachIcon from './icons/attach.svg';

export { default as Logo } from './icons/logo.svg';
export { default as Quote } from './icons/quote.svg';
export { default as Star } from './icons/star.svg';
export { default as Instagram } from './icons/instagram.svg';
export { default as LinkedIn } from './icons/linked-in.svg';
export { default as Twitter } from './icons/twitter.svg';
export { default as Facebook } from './icons/facebook.svg';

export { ArrowRight };
export const ArrowLeft = styled(ArrowRight)`
  transform: scaleX(-1);
`;

export const Attach = styled(AttachIcon)`
  stroke: currentColor;
`;
