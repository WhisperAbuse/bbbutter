import { ReactElement } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import HyperIslandImg from 'public/media/partner_logos/HyperIsland.svg';
import PleoImg from 'public/media/partner_logos/Pleo.svg';
import PWCImg from 'public/media/partner_logos/PWC.svg';
import WebflowImg from 'public/media/partner_logos/Webflow.svg';

interface IProps {}

const images = [
  HyperIslandImg,
  PleoImg,
  PWCImg,
  WebflowImg,
  HyperIslandImg,
  PleoImg,
  PWCImg,
  WebflowImg,
  HyperIslandImg,
  PleoImg,
  PWCImg,
  WebflowImg,
  HyperIslandImg,
  PleoImg,
  PWCImg,
  WebflowImg,
];

export default function ScrollingPartners({}: IProps): ReactElement {
  return (
    <Container>
      <ContainerInner>
        <ScrollingWrapper>
          {images.map((img, index) => (
            <ImageWrapper key={index}>
              <Image src={img} alt="" />
            </ImageWrapper>
          ))}
        </ScrollingWrapper>
        <ScrollingWrapper>
          {images.map((img, index) => (
            <ImageWrapper key={index}>
              <Image src={img} alt="" />
            </ImageWrapper>
          ))}
        </ScrollingWrapper>
      </ContainerInner>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const ContainerInner = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  animation: 30s infinite linear infinite-scroll-x;

  &:hover {
    animation-play-state: paused;
  }
`;

const ScrollingWrapper = styled.div`
  display: flex;
`;

const ImageWrapper = styled.div`
  width: max-content;
  height: 112px;
`;
