import { useEffect, useState } from 'react';

import styled from 'styled-components';

import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import OnlyDesktop from '../OnlyDesktop';
import OnlyMobile from '../OnlyMobile';

const MAX_SCROLL_VALUE = 110;

export default function Navigation() {
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

  const opacity = Math.min(
    Math.min(MAX_SCROLL_VALUE, scrollPosition) / MAX_SCROLL_VALUE,
    1
  );

  return (
    <Container>
      <OnlyMobile>
        <MobileNavigation opacity={opacity} />
      </OnlyMobile>
      <OnlyDesktop>
        <DesktopNavigation opacity={opacity} />
      </OnlyDesktop>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100%;
`;
