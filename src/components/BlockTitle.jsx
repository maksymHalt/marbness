import styled from '@emotion/styled';
import Text from './Text';
import { COLORS } from 'styles';

const BlockTitle = styled(Text)`
  color: ${COLORS.grey};
`;

BlockTitle.defaultProps = {
  ...BlockTitle.defaultProps,
  type: 'bigCaption'
};

export default BlockTitle;
