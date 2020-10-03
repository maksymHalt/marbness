import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Text, WidthContainer, ParallaxBackground, Quote, Cube } from '@src/components';
import { COLORS, FONTS } from '@src/styles';
import { addProps, mq } from '@src/utils';

const ReviewSection: FC = () => (
  <Container>
    <ParallaxBackground>
      <Cube1 />
      <Cube2 />
      <Cube3 />
    </ParallaxBackground>
    <Content>
      <Review>
        <Quote />
        <ReviewText>
          The best agency we’ve ever worked with. Marbness understands our product better
          than we do because of the high empathy and researching skills.
        </ReviewText>
        <ReviewCompany>CANDY.me</ReviewCompany>
        <ReviewAuthor type="bodyBig1">
          <ReviewName>Allan Brendyburg</ReviewName>
          {' - '}
          <ReviewPosition>CEO of Candy.me LTD</ReviewPosition>
        </ReviewAuthor>
      </Review>
    </Content>
  </Container>
);

export default ReviewSection;

const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 900px;
  padding: 50px 0;

  ${mq('T')} {
    min-height: 600px;
  }
`;

const Cube1 = styled(addProps(Cube, { size: 732, color: 'faded' }))`
  bottom: 0;
  left: -488px;
`;
const Cube2 = styled(addProps(Cube, { size: 46, color: 'saturated' }))`
  bottom: 327px;
  right: 144px;
`;
const Cube3 = styled(addProps(Cube, { size: 116, color: 'saturated' }))`
  bottom: 230px;
  right: -20px;
`;

const Content = styled(WidthContainer)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Review = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ReviewText = styled(Text)`
  font-family: ${FONTS.rubik};
  font-weight: 500;
  font-size: 32px;
  line-height: 1.4;
  text-align: center;
  margin: 32px 0 24px;
  max-width: 744px;
`;

const ReviewCompany = styled.div`
  font-family: ${FONTS.rubik};
  font-weight: 900;
  font-size: 40px;
  line-height: 1.4;
  color: ${COLORS.blue1};
  margin-bottom: 16px;
`;

const ReviewAuthor = styled(Text)`
  color: ${COLORS.grey};
`;
const ReviewName = styled.span`
  color: ${COLORS.black};
`;
const ReviewPosition = styled.span``;
