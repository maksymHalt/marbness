import React, { FC } from 'react';
import DigitalAgencyBlock from '@src/containers/DigitalAgencyBlock';
import ServicesBlock from '@src/containers/ServicesBlock';

const Home: FC = () => {
  return (
    <>
      <DigitalAgencyBlock />
      <ServicesBlock />
    </>
  );
};

export default Home;
