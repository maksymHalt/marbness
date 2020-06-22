import styled from '@emotion/styled'

const Space = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'center'};

  > :nth-of-type(n+2) {
    margin-left: ${({ size }) => size || '10'}px;
  }
`

export default Space
