import React, { FC } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import {
  Title,
  Text,
  Link,
  Instagram,
  LinkedIn,
  Twitter,
  Facebook
} from '@src/components';
import { COLORS } from '@src/styles';
import { addProps, mq } from '@src/utils';

const socialMediaLinks = [
  {
    href: 'https://instagram.com',
    Icon: Instagram
  },
  {
    href: 'https://linkedin.com',
    Icon: LinkedIn
  },
  {
    href: 'https://twitter.com',
    Icon: Twitter
  },
  {
    href: 'https://facebook.com',
    Icon: Facebook
  }
];

interface Props {
  row?: boolean;
}

const ContactsBlock: FC<Props> = ({ row }) => (
  <Wrapper row={row}>
    <InfoItem>
      <GreyTitle level={4}>Email</GreyTitle>
      <InfoText>
        <Link href="mailto:client@marbness.studio">client@marbness.studio</Link>
      </InfoText>
    </InfoItem>
    <InfoItem>
      <GreyTitle level={4}>Phone</GreyTitle>
      <InfoText>
        <Link href="tel:+16464533625">+1 646 453 3625</Link>
      </InfoText>
      <InfoText>
        <Link href="tel:+16464245245">+1 646 424 5245</Link>
      </InfoText>
    </InfoItem>
    <InfoItem>
      <GreyTitle level={4}>Address</GreyTitle>
      <InfoText>
        45 Red St.,
        <br />
        New York, 65-572
        <br />
        Unites States of America
      </InfoText>
    </InfoItem>
    <InfoItem>
      <GreyTitle level={4}>Social media</GreyTitle>
      <InfoText>
        <SocialMediaList>
          {socialMediaLinks.map(({ href, Icon }) => (
            <SocialMediaItem href={href} key={href} target="_blank">
              <Icon />
            </SocialMediaItem>
          ))}
        </SocialMediaList>
      </InfoText>
    </InfoItem>
  </Wrapper>
);

export default ContactsBlock;

const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;

  ${({ row }) =>
    row &&
    css`
      flex-direction: row;
      justify-content: space-between;

      ${InfoItem}:nth-of-type(n + 2) {
        margin-top: 0;
        margin-left: 30px;
      }

      ${mq('M')} {
        flex-direction: column;

        ${InfoItem}:nth-of-type(n + 2) {
          margin-left: 0;
          margin-top: 30px;
        }
      }
    `}
`;

const InfoText = styled(addProps(Text, { as: 'div', type: 'bodyBig1' }))``;

const InfoItem = styled.div`
  &:nth-of-type(n + 2) {
    margin-top: 60px;
  }

  ${InfoText}:nth-of-type(n + 2) {
    margin-top: 8px;
  }
`;
const GreyTitle = styled(Title)`
  color: ${COLORS.grey};
  margin-bottom: 16px;
`;

const SocialMediaList = styled.div`
  display: flex;
  align-items: center;
`;
const SocialMediaItem = styled(Link)`
  width: 32px;
  height: 32px;
  background: ${COLORS.pink};
  border-radius: 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;

  &:nth-of-type(n + 2) {
    margin-left: 16px;
  }

  &:hover {
    transform: scale(1.3);
    background: ${COLORS.violet};
  }
`;
