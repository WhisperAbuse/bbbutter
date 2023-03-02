import { ReactElement } from 'react';

import Link from 'next/link';
import styled from 'styled-components';

import Typography from '@/uikit/Typography';

interface IProps {
  className?: string;
  heading: string;
  links: string[];
}

function LinksGridCellBase({
  className,
  heading,
  links,
}: IProps): ReactElement {
  return (
    <Container className={className}>
      <LinksGridHeading>{heading}</LinksGridHeading>
      <LinksContainer>
        {links.map((link) => (
          <Link href="" key={link}>
            <LinkTypography>{link}</LinkTypography>
          </Link>
        ))}
      </LinksContainer>
    </Container>
  );
}

const LinksGridCell = styled(LinksGridCellBase)``;

const LinksGridHeading = styled(Typography)`
  font-size: 14px;
  font-weight: 400;
  color: white;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const LinkTypography = styled(Typography)`
  font-size: 14px;
  font-weight: 300;
  color: ${(p) => p.theme['footer-link']};

  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default LinksGridCell;
