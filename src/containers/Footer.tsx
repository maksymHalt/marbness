import React from 'react';
import {
  Logotype,
  WidthContainer,
  Title,
  Link,
  LinkType,
  Text,
  ParallaxBackground
} from '@src/components';
import { COLORS } from '@src/styles';
import styled from '@emotion/styled';

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

const Footer = () => {
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
          North Unicorn Lab - All Right Reserved
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

const Cube1 = styled.div`
  position: absolute;
  bottom: 76px;
  left: -216px;
  width: 432px;
  height: 432px;
  background: #fafaff;
  mix-blend-mode: multiply;
  border-radius: 12px;
  transform: rotate(-28.51deg);
`;
const Cube2 = styled.div`
  position: absolute;
  bottom: -106px;
  right: 25px;
  width: 224px;
  height: 224px;
  background: linear-gradient(311.12deg, #aa66e9 0%, #9340e0 100%);
  mix-blend-mode: multiply;
  box-shadow: 0px 4px 20px rgba(156, 80, 228, 0.25), 0px 2px 4px rgba(160, 86, 229, 0.1);
  border-radius: 12px;
  transform: rotate(-28.51deg);
`;
const Cube3 = styled.div`
  position: absolute;
  bottom: 180px;
  right: 22px;
  width: 55px;
  height: 55px;
  background: linear-gradient(311.12deg, #aa66e9 0%, #9340e0 100%);
  mix-blend-mode: multiply;
  box-shadow: 0px 4px 20px rgba(156, 80, 228, 0.25), 0px 2px 4px rgba(160, 86, 229, 0.1);
  border-radius: 12px;
  transform: rotate(-28.51deg);
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
`;

const FooterItem = styled(Text)`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const LogoColumn = styled.div`
  flex-grow: 5;
  flex-shrink: 0;
  flex-basis: 0;
`;
const CompanyColumn = styled.div`
  flex-grow: 2;
  flex-shrink: 0;
  flex-basis: 0;
`;
const FollowColumn = styled.div`
  flex-grow: 2;
  flex-shrink: 0;
  flex-basis: 0;
`;
const ContactColumn = styled.div`
  flex-grow: 3;
  flex-shrink: 0;
  flex-basis: 0;
`;

const FooterTitle = styled(Title)`
  margin-bottom: 32px;
  color: ${COLORS.grey};
`;

const ContactText = styled(Text)`
  margin-bottom: 24px;
`;

const CopyrightNotice = styled(Text)`
  margin-bottom: 34px;
`;