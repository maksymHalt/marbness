import React, { FC } from 'react';
import {
  Logotype,
  WidthContainer,
  Title,
  Link,
  LinkType,
  Text,
  ParallaxBackground,
  Cube
} from '@src/components';
import { COLORS } from '@src/styles';
import styled from '@emotion/styled';
import { addProps, mq } from '@src/utils';

interface LinkDataItem extends LinkType {
  label: string;
}

const companyLinks: LinkDataItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About us' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact us' }
];

const followLinks: LinkDataItem[] = [
  { href: 'https://dribbble.com/marbness', label: 'Dribble', target: '_blank' },
  { href: 'https://instagram.com/marbness', label: 'Instagram', target: '_blank' },
  { href: 'https://behance.net/marbness', label: 'Behance', target: '_blank' },
  { href: 'https://facebook.com/marbness', label: 'Facebook', target: '_blank' },
  { href: 'https://twitter.com/marbness', label: 'Twitter', target: '_blank' },
  { href: 'https://medium.com/marbness', label: 'Medium', target: '_blank' }
];

const Footer: FC = () => {
  return (
    <Container>
      <ParallaxBackground>
        <Cube1 />
        <Cube2 />
        <Cube3 />
      </ParallaxBackground>
      <Content>
        <MainPart>
          <LogoColumn>
            <Logotype type="twoLines" />
          </LogoColumn>
          <CompanyColumn>
            <FooterTitle level={4}>Company</FooterTitle>
            {companyLinks.map(({ label, ...props }) => (
              <FooterItem key={label} as="div" type="bodyBig1" weight="bold">
                <Link {...props}>{label}</Link>
              </FooterItem>
            ))}
          </CompanyColumn>
          <FollowColumn>
            <FooterTitle level={4}>Follow us</FooterTitle>
            {followLinks.map(({ label, ...props }) => (
              <FooterItem key={label} as="div" type="bodyBig1" weight="bold">
                <Link {...props}>{label}</Link>
              </FooterItem>
            ))}
          </FollowColumn>
          <ContactColumn>
            <FooterTitle level={4}>Contact us</FooterTitle>
            <ContactText type="bodyBig1">
              Feel free to contact us via email or phone from Monday to Friday (8am - 6pm)
            </ContactText>
            <FooterItem as="div" type="bodyBig1" weight="bold">
              <Link href="mailto:client@marbness.studio">client@marbness.studio</Link>
            </FooterItem>
            <FooterItem as="div" type="bodyBig1" weight="bold">
              <Link href="tel:+16464533625">+1 646 453 3625</Link>
            </FooterItem>
          </ContactColumn>
        </MainPart>
        <CopyrightNotice type="bodyBig1">
          Tecnologica - All Right Reserved
        </CopyrightNotice>
      </Content>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  position: relative;
  overflow: hidden;
  padding-top: 200px;
`;

const Cube1 = styled(addProps(Cube, { size: 432, color: 'faded' }))`
  bottom: 76px;
  left: -216px;
`;
const Cube2 = styled(addProps(Cube, { size: 224, color: 'saturated' }))`
  bottom: -106px;
  right: 25px;
`;
const Cube3 = styled(addProps(Cube, { size: 55, color: 'saturated' }))`
  bottom: 180px;
  right: 22px;
`;

const Content = styled(WidthContainer)`
  position: relative;
  z-index: 1;
`;
const MainPart = styled.div`
  display: flex;
  padding-top: 165px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ebebee;
  margin-bottom: 37px;

  ${mq('T')} {
    padding-top: 105px;
  }

  ${mq('M')} {
    flex-direction: column;

    > :nth-last-of-type(n + 2) {
      margin-bottom: 30px;
    }
  }
`;

const FooterItem = styled(Text)`
  &:nth-last-of-type(n + 2) {
    margin-bottom: 24px;

    ${mq('M')} {
      margin-bottom: 8px;
    }
  }
`;

const Column = styled.div`
  flex-grow: 2;
  flex-shrink: 0;
  flex-basis: 0;

  ${mq('M')} {
    display: flex;
    flex-wrap: wrap;

    > :nth-last-of-type(n + 2) {
      margin-right: 10px;
    }
  }
`;

const LogoColumn = styled(Column)`
  flex-grow: 5;

  ${mq('T')} {
    flex-grow: 3;
  }
`;
const CompanyColumn = styled(Column)``;
const FollowColumn = styled(Column)``;
const ContactColumn = styled(Column)`
  flex-grow: 3;
`;

const FooterTitle = styled(Title)`
  margin-bottom: 32px;
  color: ${COLORS.grey};

  ${mq('M')} {
    flex-basis: 100%;
    margin-bottom: 10px;
  }
`;

const ContactText = styled(Text)`
  margin-bottom: 24px;
`;

const CopyrightNotice = styled(Text)`
  margin-bottom: 34px;
`;
