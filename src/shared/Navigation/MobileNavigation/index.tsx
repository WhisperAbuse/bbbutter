import { CSSProperties, useEffect, useState } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import LogoImg from 'public/media/common/butterlogo.svg';

import MobileBurger from './MobileBurger';

interface IProps {
  opacity: number;
}

export default function MobileNavigation({ opacity }: IProps) {
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
