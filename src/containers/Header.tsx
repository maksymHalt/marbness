import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Logotype, WidthContainer, Link, Space, LinkType } from '@src/components';
import { mq } from '@src/utils';

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

const Header: FC = () => (
  <Container>
    <Content>
      <Link href="/">
        <Logotype />
      </Link>
      <Navigation>
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

  ${mq('M')} {
    flex-direction: column;
  }
`;

const Navigation = styled(Space.withComponent('nav'))`
  > :nth-of-type(n + 2) {
    margin-left: 60px;

    ${mq('T')} {
      margin-left: 25px;
    }
  }

  ${mq('M')} {
    flex-wrap: wrap;
    justify-content: center;

    > * {
      margin-top: 10px;
    }
  }
`;
