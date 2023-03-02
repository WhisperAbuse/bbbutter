import { CSSProperties, useEffect, useState } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import LogoImg from 'public/media/common/butterlogo.svg';

import MobileBurger from './MobileBurger';

export default function MobileNavigation() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const opacity = Math.min(Math.min(200, scrollPosition) / 200, 1);

  return (
    <MobileNavWrapper>
      <MobileNav style={{ '--opacity': opacity } as CSSProperties}>
        <LogoWrapper>
          <Image src={LogoImg} alt="Butter logo" />
        </LogoWrapper>
        <div>
          <MobileBurger />
        </div>
      </MobileNav>
    </MobileNavWrapper>
  );
}

const MobileNavWrapper = styled.div`
  padding: 15px 20px 0px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const MobileNav = styled.div`
  background-color: rgba(255, 255, 255, var(--opacity));
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px 5px 20px;
  box-shadow: 0 4px 8px 0 rgba(10, 11, 30, calc(0.06 * var(--opacity))),
    0 8px 48px 0 rgba(10, 11, 30, calc(0.08 * var(--opacity)));
  border-radius: 20px;
`;

const LogoWrapper = styled.div`
  max-width: 80px;
  width: 100%;
`;
