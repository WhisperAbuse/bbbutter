import Image from 'next/image';
import styled from 'styled-components';

export default function MobileBurger() {
  return (
    <StyledMobileBurger>
      <ImageWrapper>
        <Image src="/icons/white/bars.svg" fill={true} alt="burger icon" />
      </ImageWrapper>
    </StyledMobileBurger>
  );
}

const ImageWrapper = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
`;

const StyledMobileBurger = styled.div`
  background-color: ${(p) => p.theme.dark};
  border-radius: 16px;
  padding: 16px;
`;
