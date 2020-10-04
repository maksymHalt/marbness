import React, { FC } from 'react';
import { WidthContainer } from '@src/components';
import ContactsBlock from '@src/containers/ContactsBlock';

const Contact: FC = () => {
  return (
    <WidthContainer>
      <ContactsBlock row />
    </WidthContainer>
  );
};

export default Contact;
