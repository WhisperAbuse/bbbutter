'use client';
import { ReactElement, useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import styled, { css, keyframes } from 'styled-components';

import { screen } from '@/global/breakpoints';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import ButtonBase from '@/uikit/BaseButton';
import Typography from '@/uikit/Typography';
import BallSVG from 'public/media/footer/Footer Ball.svg';
interface IProps {
  className?: string;
}

function GetStartedButtonBase({ className }: IProps): ReactElement {
  const [isRotateButton, setIsRotateButton] = useState(false);
  const [isBallLaunch, setIsBallLaunch] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  const [animationStarted, setAnimationStarted] = useState(false);
  useEffect(() => {
    if (isVisible) {
      setAnimationStarted(true);
    }
  }, [isVisible]);

  useEffect(() => {
    if (animationStarted) {
      runAnimation();
    }
  }, [animationStarted]);

  const runAnimation = () => {
    setIsRotateButton(true);

    setTimeout(() => {
      setIsBallLaunch(true);
      setIsRotateButton(false);
    }, 2450);
  };

  return (
    <Container isRotateButton={isRotateButton} isBallLaunch={isBallLaunch}>
      <BallMoveWrapper
        isRotateButton={isRotateButton}
        isBallLaunch={isBallLaunch}
      >
        <BallContainer>
          <Ball isRotateButton={isRotateButton} isBallLaunch={isBallLaunch}>
            <Image src={BallSVG} alt="" />
          </Ball>
        </BallContainer>
      </BallMoveWrapper>
      <div ref={ref}>
        <ButtonContainer className={className}>
          <ButtonText>Get started for free</ButtonText>
        </ButtonContainer>
      </div>
    </Container>
  );
}

type AnimProps = {
  isBallLaunch: boolean;
  isRotateButton: boolean;
};
const GetStartedButton = styled(GetStartedButtonBase)``;

const rotateAnim = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div<AnimProps>`
  position: relative;
  transition: transform 0.2s cubic-bezier(0.32, -1.02, 0.61, 1.88);

  ${(p) =>
    p.isRotateButton &&
    css`
      transform: rotate(5deg);
    `}
`;

const BallMoveWrapper = styled.div<AnimProps>`
  transform: translateX(calc(40px));
  transition: transform 2.5s ease-in;

  ${(p) =>
    p.isRotateButton &&
    css`
      transform: translateX(calc(100% - 80px));
    `}

  ${(p) =>
    p.isBallLaunch &&
    css`
      transition: transform 0.3s ease-out;
      transform: translateX(150%) translateY(-1000%);
    `}
`;

const BallContainer = styled.div`
  width: fit-content;
`;

const Ball = styled.div<AnimProps>`
  background: linear-gradient(green, red);
  width: 40px;
  height: 40px;
  border-radius: 9999px;

  ${(p) =>
    (p.isRotateButton || p.isBallLaunch) &&
    css`
      animation: ${rotateAnim} 1s linear infinite;
    `};
`;

const ButtonContainer = styled(ButtonBase)`
  background-color: white;
  border-radius: 56px;
  padding: 20px 10px;
  width: 100%;

  @media ${screen.tablet} {
    padding: 40px 10px;
  }
`;

const ButtonText = styled(Typography)`
  font-size: 26px;
  font-weight: 600;

  @media ${screen.tablet} {
    font-size: 32px;
  }
`;

export default GetStartedButton;
