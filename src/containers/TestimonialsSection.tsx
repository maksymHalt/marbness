import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { chunk } from 'lodash';
import {
  Title,
  WidthContainer,
  BlockTitle,
  ParallaxBackground,
  Cube,
  ReviewRating,
  Button,
  ArrowLeft,
  ArrowRight,
  Text
} from '@src/components';
import { COLORS } from '@src/styles';
import { addProps, mq } from '@src/utils';

const testimonials = new Array(7)
  .fill({
    score: 5,
    text: `Marbness is a great company. I work with them as an independent contractor on some
        projects remotely and sometimes visit them onsite. Read about them, take a look at
        case studies, check their team out.`,
    avatar: '/img/testimonial-author-1.png',
    author: 'Allan Brendyburg',
    position: 'CEO of Fantasy LLD'
  })
  .map((item, id) => ({ ...item, id }));

const TestimonialsSection: FC = () => {
  const [swiper, setSwiper] = useState(null);

  // To demonstrate the visualization of a fractional score
  useEffect(() => {
    testimonials.forEach((item) => (item.score = +(Math.random() + 4).toFixed(1)));
  }, []);

  return (
    <Container>
      <ParallaxBackground>
        <Cube1 />
        <Cube2 />
        <Cube3 />
      </ParallaxBackground>
      <Content>
        <BlockTitle>Testimonials</BlockTitle>
        <Title level={1}>What clients think</Title>
        <Swiper
          onSwiper={setSwiper}
          loop={true}
          allowTouchMove={false}
          tag={(SwiperContainer as unknown) as string}
        >
          {chunk(testimonials, 4).map((slideList, i) => (
            <SwiperSlide key={i}>
              <List>
                {slideList.map(({ id, score, text, avatar, author, position }) => (
                  <Item key={id}>
                    <Rating score={score.toFixed(1)} />
                    <TextContent>{text}</TextContent>
                    <AuthorBlock>
                      <Avatar src={avatar} />
                      <Author>{author}</Author>
                      <Position>{position}</Position>
                    </AuthorBlock>
                  </Item>
                ))}
              </List>
            </SwiperSlide>
          ))}
        </Swiper>
        <Navigation>
          <Button type="simple" onClick={() => swiper.slidePrev()}>
            <ArrowLeft />
          </Button>
          <NavDot />
          <Button type="simple" onClick={() => swiper.slideNext()}>
            <ArrowRight />
          </Button>
        </Navigation>
      </Content>
    </Container>
  );
};

export default TestimonialsSection;

const Container = styled.section`
  position: relative;
  padding-top: 125px;
  padding-bottom: 95px;
`;

const Cube1 = styled(addProps(Cube, { size: 780, color: 'faded' }))`
  top: 0;
  left: -560px;
`;
const Cube2 = styled(addProps(Cube, { size: 46, color: 'saturated' }))`
  top: 430px;
  right: 32px;
`;
const Cube3 = styled(addProps(Cube, { size: 104, color: 'saturated' }))`
  top: 260px;
  right: -62px;
`;

const Content = styled(WidthContainer)``;

const SwiperContainer = styled.div`
  margin-top: 80px;
`;

const List = styled.div`
  display: grid;
  grid-template: auto auto / auto auto;
`;
const Item = styled.div`
  display: inline-block;
  max-width: 470px;

  ${mq('T')} {
    max-width: 350px;
  }

  &:nth-of-type(4n + 3),
  &:nth-of-type(4n + 4) {
    margin-top: 40px;
    border-top: 1px solid ${COLORS.lightestGrey};
    padding-top: 40px;
  }
`;
const Rating = styled(ReviewRating)`
  margin-bottom: 12px;
`;
const TextContent = styled(addProps(Text, { type: 'bodyBig1' }))`
  margin-bottom: 16px;
`;
const AuthorBlock = styled.div`
  display: inline-grid;
  grid-template: auto auto / auto auto;
`;
const Avatar = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  grid-row: 1 / 3;
  margin-right: 16px;
`;
const Author = styled(addProps(Text, { type: 'bodyBig1', weight: 'bold', as: 'div' }))``;
const Position = styled(addProps(Text, { type: 'bodyBig1', as: 'div' }))`
  color: ${COLORS.grey};
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const NavDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 5px;
  background: ${COLORS.pinkSolid};
  margin: 1px 16px 0;
`;
