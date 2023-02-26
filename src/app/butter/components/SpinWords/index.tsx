import { ReactElement } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import ButterWordImg from 'public/media/spinning-words/Butter.svg';
import ProfileGreenImg from 'public/media/spinning-words/community_profile_green.webp';
import ProfilePurpleImg from 'public/media/spinning-words/community_profile_purple.webp';
import ProfileRedImg from 'public/media/spinning-words/community_profile_red.webp';
import CommunityWordImg from 'public/media/spinning-words/CommunityWord.svg';
import PlaySVG from 'public/media/spinning-words/Play logo.svg';

interface IProps {
  className?: string;
}

function SpinWordsBase({ className }: IProps): ReactElement {
  return (
    <Container className={className}>
      <Image src={CommunityWordImg} alt="" className="community-word-rotate" />
      <ButterWord className="butter-word-rotate">
        <ButterImage src={ButterWordImg} alt="" />
      </ButterWord>
      <PlayButtonWrapper>
        <PlayImage src={PlaySVG} alt="" />
      </PlayButtonWrapper>
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

const PlayButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const PlayImage = styled(Image)`
  width: 10%;
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
