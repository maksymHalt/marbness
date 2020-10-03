import React, { FC } from 'react';
import DigitalAgencySection from '@src/containers/DigitalAgencySection';
import ServicesSection from '@src/containers/ServicesSection';
import ReviewSection from '@src/containers/ReviewSection';
import WorksSection from '@src/containers/WorksSection';
import TestimonialsSection from '@src/containers/TestimonialsSection';
import HireUsSection from '@src/containers/HireUsSection';

const Home: FC = () => {
  return (
    <>
      <DigitalAgencySection />
      <ServicesSection />
      <ReviewSection />
      <WorksSection />
      <TestimonialsSection />
      <HireUsSection />
    </>
  );
};

export default Home;
