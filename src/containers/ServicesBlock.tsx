import React, { FC } from 'react';
import styled from '@emotion/styled';
import {
  Title,
  Text,
  WidthContainer,
  BlockTitle,
  ParallaxBackground,
  Cube
} from '@src/components';
import { COLORS } from '@src/styles';
import { addProps } from '@src/utils';

const servicesData = [
  {
    title: 'Interface (UI/UX) Design',
    description:
      'We are professional developing digital agency, who creates experience for your clients.',
    featuresList: ['Researches', 'UX Design', 'Visual Design', 'Illustration / Animation']
  },
  {
    title: 'Web & Mobile Development',
    description:
      'We are professional developing digital agency, who creates experience for your clients.',
    featuresList: [
      'Wordpress / ECommerce / Magento',
      'React.js, JS, Vue.js',
      'Swift, Stripe',
      'Node.js, Python, Ruby on Rails'
    ]
  },
  {
    title: 'Brand Development & Identity',
    description:
      'We are professional developing digital agency, who creates experience for your clients.',
    featuresList: [
      'Market / Competitors Research',
      'Brand Strategy',
      'Visual Identity',
      'Advertising Campaigns'
    ]
  }
];

const ServicesBlock: FC = () => (
  <Container>
    <ParallaxBackground>
      <Cube1 />
      <Cube2 />
      <Cube3 />
    </ParallaxBackground>
    <Content>
      <BlockTitle>Services</BlockTitle>
      <Title level={1}>What we do</Title>

      <ServiceList>
        {servicesData.map(({ title, description, featuresList }) => (
          <ServiceItem key={title}>
            <Box />
            <ServiceTitle level={3}>{title}</ServiceTitle>
            <Description type="bodyBig1">{description}</Description>
            <Divider />
            <FeatureList>
              {featuresList.map((item) => (
                <FeatureItem key={item}>{item}</FeatureItem>
              ))}
            </FeatureList>
          </ServiceItem>
        ))}
      </ServiceList>
    </Content>
  </Container>
);

export default ServicesBlock;

const Container = styled.section`
  position: relative;
  padding-top: 125px;
  padding-bottom: 95px;
`;

const Cube1 = styled(addProps(Cube, { size: 102, color: 'saturated' }))`
  bottom: 0px;
  left: -77px;
`;
const Cube2 = styled(addProps(Cube, { size: 608, color: 'faded' }))`
  bottom: 128px;
  right: 67px;
`;
const Cube3 = styled(addProps(Cube, { size: 224, color: 'faded' }))`
  bottom: 632px;
  right: -84px;
`;

const Content = styled(WidthContainer)`
  position: relative;
`;
const ServiceList = styled.div`
  margin-top: 100px;
  display: flex;
`;
const ServiceItem = styled.div`
  flex: 0 0 33.3333%;
  padding: 32px;
  border-radius: 12px;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${COLORS.violet};
    color: ${COLORS.white};
  }
`;
const Box = styled.div`
  width: 65px;
  height: 65px;
  background: ${COLORS.pink};
  box-shadow: 0px 4px 20px rgba(243, 97, 132, 0.25), 0px 2px 4px rgba(241, 109, 141, 0.1);
  border-radius: 12px;
  margin-bottom: 32px;
  transition: background 0.2s;

  ${ServiceItem}:hover & {
    background: ${COLORS.white};
  }
`;
const ServiceTitle = styled(Title)`
  margin: 32px 0 16px;
  height: 2em;
  display: flex;
  align-items: center;
`;
const Description = styled(Text)`
  margin: 16px 0 24px 0;
`;
const Divider = styled.div`
  opacity: 0.3;
  border-top: 1px solid ${COLORS.lightGrey};
  margin: 24px 0;
  transition: color 0.2s;

  ${ServiceItem}:hover & {
    border-color: ${COLORS.white};
  }
`;
const FeatureList = styled.ul`
  color: ${COLORS.grey};
  list-style: none;
  margin: 0;
  padding: 0;
  transition: color 0.2s;

  ${ServiceItem}:hover & {
    color: ${COLORS.white};
  }
`;
const FeatureItem = styled.li`
  &::before {
    content: '–';
    margin-right: 8px;
    color: ${COLORS.pinkSolid};
  }
  &:nth-child(n + 2) {
    margin-top: 12px;
  }
`;
