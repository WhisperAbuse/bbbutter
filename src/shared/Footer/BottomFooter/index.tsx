import { ReactElement } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import Typography from '@/uikit/Typography';
import ButterLogoSVG from 'public/media/common/logoOnDark.png';

import LinksGridCell from './LinksGridCell';

const linksData = [
  {
    heading: 'Site',
    links: [
      'Frontpage',
      'Desktop app',
      'Mobile app',
      'Pricing',
      'Blog',
      'Community',
      'Careers',
      'Butter vs. Zoom',
    ],
  },
  {
    heading: 'Support',
    links: [
      'Help pages',
      'Butter Graphics',
      'Terms of Service',
      'Privacy Policy',
      'GDPR',
      'Security',
    ],
  },
  {
    heading: 'Social',
    links: ['Twitter', 'Facebook', 'Linkedin'],
  },
];

interface IProps {
  className?: string;
}

function BottomFooterBase({ className }: IProps): ReactElement {
  return (
    <Container className={className}>
      <LogoLine>
        <ButterLogo src={ButterLogoSVG} alt="" />
        <Copyright>© Copyright Butter 2023</Copyright>
      </LogoLine>
      <LinksGrid>
        {linksData.map(({ heading, links }) => (
          <LinksGridCell heading={heading} links={links} key={heading} />
        ))}
      </LinksGrid>
    </Container>
  );
}

const BottomFooter = styled(BottomFooterBase)`
  padding: 100px 20px;
`;

const Container = styled.div``;

const LogoLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 60px;
`;

const ButterLogo = styled(Image)`
  max-width: 125px;
`;

const Copyright = styled(Typography)`
  font-size: 12px;
  font-weight: 500;
  color: ${(p) => p.theme['footer-copyright']};
`;

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`;

export default BottomFooter;
