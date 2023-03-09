import { ReactElement } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import styled from 'styled-components';

import { screen } from '@/global/breakpoints';
import FullScreenModal from '@/uikit/FullScreenModal';
import ButterWordImg from 'public/media/spinning-words/Butter.svg';
import ProfileGreenImg from 'public/media/spinning-words/community_profile_green.webp';
import ProfilePurpleImg from 'public/media/spinning-words/community_profile_purple.webp';
import ProfileRedImg from 'public/media/spinning-words/community_profile_red.webp';
import CommunityWordImg from 'public/media/spinning-words/CommunityWord.svg';
import DotPlayImg from 'public/media/spinning-words/Dot Play.webp';
import PlaySVG from 'public/media/spinning-words/Play logo.svg';

import EmbeddedVideo from './EmbeddedVideo';

interface IProps {
  className?: string;
}

function SpinWordsBase({ className }: IProps): ReactElement {
  return (
    <Dialog.Root>
      <Container className={className}>
        <Image
          src={CommunityWordImg}
          alt=""
          className="community-word-rotate"
        />
        <ButterWord>
          <ButterImage
            src={ButterWordImg}
            alt=""
            className="butter-word-rotate"
          />
        </ButterWord>

        <Dialog.Trigger>
          <PlayButtonWrapper>
            <PlayImagesWrapper>
              <DotPlayImage src={DotPlayImg} alt="" />
              <PlayImage src={PlaySVG} alt="" />
            </PlayImagesWrapper>
          </PlayButtonWrapper>
        </Dialog.Trigger>
        <FullScreenModal>
          <EmbeddedVideo />
        </FullScreenModal>

        <div>
          <ProfileRed>
            <Image src={ProfileRedImg} alt="" />
          </ProfileRed>
          <ProfileGreen>
            <Image src={ProfileGreenImg} alt="" />
          </ProfileGreen>
          <ProfilePurple>
            <Image src={ProfilePurpleImg} alt="" />
          </ProfilePurple>
        </div>
      </Container>
    </Dialog.Root>
  );
}

const SpinWords = styled(SpinWordsBase)`
  position: relative;
`;

const Container = styled.div``;

const ButterWord = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const ButterImage = styled(Image)`
  width: 50%;
`;

const DotPlayImage = styled(Image)`
  position: absolute;
  width: 130%;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
`;

const PlayImage = styled(Image)`
  position: absolute;
`;

const PlayButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  transform: translateX(1%);
`;

const PlayImagesWrapper = styled.div`
  position: relative;
  width: 12%;
  height: 12%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    ${DotPlayImage} {
      opacity: 1;
    }
  }

  @media ${screen.laptop} {
    width: 7%;
    height: 7%;
  }
`;

const ProfileRed = styled.div`
  width: 10%;
  position: absolute;
  top: 24%;
  left: 18%;
`;

const ProfileGreen = styled.div`
  width: 10%;
  position: absolute;
  top: 33%;
  left: 75%;
`;

const ProfilePurple = styled.div`
  width: 10%;
  position: absolute;
  top: 73%;
  left: 35%;
`;

export default SpinWords;
