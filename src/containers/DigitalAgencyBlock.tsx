import React from 'react';
import styled from '@emotion/styled';
import { Title, Text, Link, WidthContainer, Space, BlockTitle } from '@src/components';

const DigitalAgencyBlock = () => (
  <Container>
    <LeftColumn>
      <BlockTitle>Digital agency</BlockTitle>
      <Title>Marbness</Title>
      <Description type="bodyBig1">
        We are professional developing digital agency, who creates experience for your
        clients.
      </Description>
      <Space size={24}>
        <Link href="/hire-us" type="button">
          Hire us
        </Link>
        <Link href="/about-us" type="ghostButton">
          About us
        </Link>
      </Space>
    </LeftColumn>
    <RightColumn>
      <Photo src="/img/main-photo.png" />
    </RightColumn>
  </Container>
);

export default DigitalAgencyBlock;

const Container = styled(WidthContainer.withComponent('section'))`
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
`;
const LeftColumn = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const RightColumn = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
`;
const Description = styled(Text)`
  margin: 16px 120px 40px 0;
`;
const Photo = styled.img`
  border-radius: 24px;
  height: 552px;
`;
