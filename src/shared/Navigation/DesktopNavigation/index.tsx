import { CSSProperties, ReactElement } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { NavLinkData } from '@/global/types';
import ButtonBase from '@/uikit/BaseButton';
import PageContentWrap from '@/uikit/PageContentWrap';
import Typography from '@/uikit/Typography';
import LogoImg from 'public/media/common/butterlogo.svg';

import NavLink from './NavLink';

interface IProps {
  className?: string;
  opacity: number;
}

function DesktopNavigationBase({ className, opacity }: IProps): ReactElement {
  return (
    <OuterContainer>
      <Container
        className={className}
        style={{ '--opacity': opacity } as CSSProperties}
      >
        <NavContent>
          <LogoLink href="/butter">
            <LogoImgWrapper src={LogoImg} alt="Butter logo" />
          </LogoLink>

          <NavLinks>
            <NavLink
              linkData={{ text: 'Features', href: '#' }}
              HoverMenu={true}
            />
            <NavLink
              linkData={{ text: 'Use cases', href: '#' }}
              HoverMenu={true}
            />
            <NavLink linkData={{ text: 'Templates', href: '#' }} />
            <NavLink linkData={{ text: 'Pricing', href: '#' }} />
            <NavLink
              linkData={{ text: 'Resources', href: '#' }}
              HoverMenu={true}
            />
            <NavLink
              linkData={{ text: 'Download', href: '#' }}
              HoverMenu={true}
            />
          </NavLinks>
        </NavContent>
        <NavButtons>
          <SignInBtn>Sign in</SignInBtn>

          <TryButterBtn style={{ '--opacity': opacity } as CSSProperties}>
            Try Butter for free
          </TryButterBtn>
        </NavButtons>
      </Container>
    </OuterContainer>
  );
}

const DesktopNavigation = styled(DesktopNavigationBase)``;

const OuterContainer = styled(PageContentWrap)`
  padding-top: 30px;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  padding: 10px 10px 10px 30px;
  background-color: rgba(255, 255, 255, var(--opacity));
  box-shadow: 0 4px 8px 0 rgba(10 11 30 / calc(6% * var(--opacity))),
    0 8px 48px 0 rgba(10 11 30 / calc(8% * var(--opacity)));
  border-radius: 20px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

const NavContent = styled.div`
  display: flex;
  gap: 30px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const LogoImgWrapper = styled(Image)`
  max-width: 100px;
  width: 100%;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 5px;
`;

const SignInBtn = styled(ButtonBase)`
  padding: 14px 20px;
  font-size: 14px;
  font-weight: 400;
  transition: background-color 0.3s ease-in-out;
  border-radius: 12px;
  color: ${(p) => p.theme.dark};

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const TryButterBtn = styled(ButtonBase)`
  background-color: rgba(0, 0, 0, calc(0.1 + 0.9 * var(--opacity)));
  padding: 14px 20px;
  font-size: 14px;
  font-weight: 400;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  border-radius: 12px;
  color: rgb(
    calc(255 * var(--opacity)),
    calc(255 * var(--opacity)),
    calc(255 * var(--opacity))
  );

  &:hover {
    box-shadow: 1px 1px 0 0 #000;
    transform: translate(-1px, -1px);
  }
`;

export default DesktopNavigation;
