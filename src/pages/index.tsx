import React, { FC } from 'react';
import DigitalAgencyBlock from '@src/containers/DigitalAgencyBlock';
import ServicesBlock from '@src/containers/ServicesBlock';
import ReviewBlock from '@src/containers/ReviewBlock';
import WorksBlock from '@src/containers/WorksBlock';

const Home: FC = () => {
  return (
    <>
      <DigitalAgencyBlock />
      <ServicesBlock />
      <ReviewBlock />
      <WorksBlock />
    </>
  );
};

export default Home;
