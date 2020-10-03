import React, { FC } from 'react';
import styled from '@emotion/styled';
import { WidthContainer, ParallaxBackground, Cube } from '@src/components';
import { addProps } from '@src/utils';
import HireUsBlock from './HireUsBlock';
import ContactsBlock from './ContactsBlock';

const HireUsSection: FC = () => (
  <Container>
    <ParallaxBackground>
      <Cube1 />
      <Cube2 />
      <Cube3 />
    </ParallaxBackground>
    <Content>
      <LeftHalf>
        <ContactsBlock />
      </LeftHalf>
      <RightHalf>
        <HireUsBlock />
      </RightHalf>
    </Content>
  </Container>
);

export default HireUsSection;

const Container = styled.section`
  position: relative;
  padding-top: 125px;
  padding-bottom: 95px;
`;

const Cube1 = styled(addProps(Cube, { size: 102, color: 'saturated' }))`
  top: 0;
  left: -54px;
`;
const Cube2 = styled(addProps(Cube, { size: 52, color: 'saturated' }))`
  top: 130px;
  left: 76px;
`;
const Cube3 = styled(addProps(Cube, { size: 532, color: 'faded' }))`
  top: -30px;
  right: -264px;
`;

const Content = styled(WidthContainer)`
  position: relative;
  display: flex;
`;

const LeftHalf = styled.div`
  width: 50%;
`;
const RightHalf = styled.div`
  width: 50%;
`;
