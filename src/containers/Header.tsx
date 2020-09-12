import React from 'react';
import styled from '@emotion/styled';
import { Logotype, WidthContainer, Link, Space, LinkType } from '@src/components';

interface LinkDataItem extends LinkType {
  label: string;
}

const navList: LinkDataItem[] = [
  { href: '/about-us', label: 'About us' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
  { href: '/hire-us', label: 'Hire us', type: 'button' }
];

const Header = () => (
  <Container>
    <Content>
      <Link href="/">
        <Logotype />
      </Link>
      <Navigation size={60}>
        {navList.map(({ label, ...props }) => (
          <Link key={label} {...props}>
            {label}
          </Link>
        ))}
      </Navigation>
    </Content>
  </Container>
);

export default Header;

const Container = styled.header`
  margin: 40px 0;
`;
const Content = styled(WidthContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = Space.withComponent('nav');
