import { ReactElement } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import ButtonBase from '@/uikit/BaseButton';
import Heading from '@/uikit/Heading';
import PlaySVG from 'public/media/spinning-words/Play logo.svg';

interface IProps {
  className?: string;
  onClick: () => void;
}

function PlayButtonBase({ className, onClick }: IProps): ReactElement {
  return (
    <Container className={className} onClick={onClick}>
      <PlayImage src={PlaySVG} alt="Play showcase video" />
      <TakeHeading>Take a 2 min. tour</TakeHeading>
    </Container>
  );
}

const PlayButton = styled(PlayButtonBase)``;

const Container = styled(ButtonBase)`
  background-color: white;
  display: flex;
  padding: 36px 48px;
  align-items: center;
  border-radius: 50px;
  gap: 20px;
`;

const PlayImage = styled(Image)`
  max-width: 50px;
  width: 100%;
`;

const TakeHeading = styled(Heading)`
  color: ${(p) => p.theme.dark};
  font-size: 34px;
  line-height: 40px;
  font-weight: 700;
`;

export default PlayButton;
