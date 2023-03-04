'use client';
import { ReactElement, ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { NavLinkData } from '@/global/types';
import ButtonBase from '@/uikit/BaseButton';
import Typography from '@/uikit/Typography';
import ExpandSVG from 'public/media/common/expand_more.svg';

interface IProps {
  className?: string;
  linkData: NavLinkData;
  HoverMenu?: ReactNode;
}

function NavLinkBase({ className, linkData, HoverMenu }: IProps): ReactElement {
  return (
    <Container className={className}>
      {HoverMenu ? (
        <NavLinkText>{linkData.text}</NavLinkText>
      ) : (
        <Link href={linkData.href}>
          <NavLinkText>{linkData.text}</NavLinkText>
        </Link>
      )}

      {HoverMenu ? <StyledImage src={ExpandSVG} alt="Expand menu" /> : null}
    </Container>
  );
}

const NavLink = styled(NavLinkBase)``;

const Container = styled(ButtonBase)`
  display: flex;
  gap: 3px;
  align-items: center;
  padding: 14px 10px;
  border-radius: 12px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const NavLinkText = styled(Typography)`
  font-size: 14px;
  color: ${(p) => p.theme.dark};
  flex: 0;
  white-space: nowrap;
`;

const StyledImage = styled(Image)`
  width: 16px;
  height: 16px;
`;

export default NavLink;
