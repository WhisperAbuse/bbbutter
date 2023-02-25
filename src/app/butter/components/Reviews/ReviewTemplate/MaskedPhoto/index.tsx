import { ReactElement } from "react";

import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

import LeafMaskSVG from "public/media/reviews/leaf.svg";
import ProcessDotsImg from "public/media/reviews/Process Dots.png";
interface IProps {
  className?: string;
  PersonImg: StaticImageData;
}

function MaskedPhotoBase({ className, PersonImg }: IProps): ReactElement {
  return (
    <Container>
      <DotsImage src={ProcessDotsImg} alt="" />
      <StyledImageLeaf src={LeafMaskSVG} alt="" />
      <MaskContainer className={className}>
        <StyledImage src={PersonImg} alt="" />
      </MaskContainer>
    </Container>
  );
}

const MaskedPhoto = styled(MaskedPhotoBase)``;

const Container = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  max-width: 400px;
`;

const MaskContainer = styled.div`
  mask-image: url("media/reviews/leaf.svg");
  mask-repeat: no-repeat;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: fit-content;
  background-color: ${(p) => p.theme["contrast-blue"]};
`;

const StyledImageLeaf = styled(Image)`
  transform: scale(1.01);
  top: -3px;
  position: absolute;
  width: 100%;
  height: fit-content;
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
