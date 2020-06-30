import styled from '@emotion/styled'

const Text = ({ type = 'body', weight = 'normal', as = 'p', ...props }) => {
  const T = TYPES[type]
  return <T as={as} weight={weight} {...props} />
}

export default Text

const Body = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  font-weight: ${({ weight }) => weight};
`
const BodyBig1 = styled(Body)`
  font-size: 16px;
`
const BodyBig2 = styled(BodyBig1)`
  text-transform: uppercase;
`
const Tiny = styled(Body)`
  font-size: 12px;
`
const Caption = styled(Tiny)`
  line-height: 1.6;
  letter-spacing: 0.01em;
  text-transform: uppercase;
`

const TYPES = {
  body: Body,
  bodyBig1: BodyBig1,
  bodyBig2: BodyBig2,
  tiny: Tiny,
  caption: Caption
}
