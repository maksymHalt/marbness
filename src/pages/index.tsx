import React, { FC } from 'react';
import DigitalAgencyBlock from '@src/containers/DigitalAgencyBlock';
import ServicesBlock from '@src/containers/ServicesBlock';
import ReviewBlock from '@src/containers/ReviewBlock';

const Home: FC = () => {
  return (
    <>
      <DigitalAgencyBlock />
      <ServicesBlock />
      <ReviewBlock />
    </>
  );
};

export default Home;
