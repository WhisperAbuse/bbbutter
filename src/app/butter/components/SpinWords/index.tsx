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
      <Image src={CommunityWordImg} alt="" />
    </Container>
  );
}

const SpinWords = styled(SpinWordsBase)`
  background-color: ${(p) => p.theme.peach};
`;

const Container = styled.div``;

export default SpinWords;
