import { ReactElement, useEffect, useRef, useState } from "react";

import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

import LeafMaskSVG from "public/media/reviews/leaf.svg";
import ProcessDotsImg from "public/media/reviews/Process Dots.png";
interface IProps {
  className?: string;
  PersonImg: StaticImageData;
  backgroundColor: string;
  leafRotate: boolean;
}

// TODO: Reset and trigger animations on fast review change
function MaskedPhotoBase({
  className,
  PersonImg,
  leafRotate,
  backgroundColor,
}: IProps): ReactElement {
  return (
    <Container>
      <DotsImage
        src={ProcessDotsImg}
        alt=""
        className={`${leafRotate && "dots-appear"}`}
      />

      <StyledImageLeaf
        className={`${leafRotate && "back-leaf-rotate"}`}
        src={LeafMaskSVG}
        alt=""
      />

      <MaskContainer className={`${leafRotate && "leaf-rotate"}`}>
        <BackgroundOverlay backgroundColor={backgroundColor} />
        <StyledImage
          src={PersonImg}
          alt=""
          className={`${leafRotate && "img-rotate"}`}
        />
        <WhiteOverlay
          className={`${leafRotate && "white-overlay-dissapear"}`}
        />
      </MaskContainer>
    </Container>
  );
}

const MaskedPhoto = styled(MaskedPhotoBase)``;

const Container = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  max-width: 300px;
`;

const MaskContainer = styled.div`
  position: relative;
  mask-image: url("media/reviews/leaf.svg");
  mask-repeat: no-repeat;

  transform: rotate(0deg);
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: fit-content;

  transform: scale(130%) translateX(10%) translateY(5%);
`;

const BackgroundOverlay = styled.div<{ backgroundColor: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.backgroundColor};
`;
const WhiteOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0;
`;
const StyledImageLeaf = styled(Image)`
  position: absolute;
  width: 100%;
  height: fit-content;
  transform: scale(1.01);
`;

const DotsImage = styled(Image)`
  position: absolute;
  transform: rotate(45deg);
  width: 80%;
  left: 10%;
  top: 10%;
  height: fit-content;
`;

export default MaskedPhoto;
