import styled from '@emotion/styled';
import { mq } from '@src/utils';

const WidthContainer = styled.div`
  width: 1128px;
  margin-left: auto;
  margin-right: auto;

  ${mq('T')} {
    width: 768px;
  }

  ${mq('M')} {
    width: 320px;
  }
`;

export default WidthContainer;
