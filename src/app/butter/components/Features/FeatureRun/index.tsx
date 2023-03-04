import { ReactElement } from 'react';

import Lottie from 'lottie-react';
import Image from 'next/image';
import styled from 'styled-components';

import { screen } from '@/global/breakpoints';
import FeaturePaper from '@/shared/FeaturePaper';
import lottieHands from 'public/media/animations/lottie-anim-hands.json';
import RunBean from 'public/media/features/mrbean.gif';
import RunChat from 'public/media/features/run_bumb_chat.png';
import RunDottedImg from 'public/media/features/run_bumb_dotted_pattern.png';
import RunNode from 'public/media/features/run_bumb_node.png';
import RunTrueDottedImg from 'public/media/features/run_true_dotted_pattern.png';

import FeatureContent from '../Content';
import StyledFeatureSection from '../StyledFeatureSection';
import Title from '../Title';

interface IProps {
  className?: string;
}

function FeatureRun({ className }: IProps): ReactElement {
  return (
    <div>
      <Title title="Run" rotateAngle={10} align="right" />
      <StyledFeatureRun>
        <SectionTop>
          <ImagesWrapper>
            <StyledImage src={RunDottedImg} alt="" />
            <ChatImageWrapper>
              <Image src={RunChat} alt="" />
            </ChatImageWrapper>
            <BeanImageWrapper>
              <Image src={RunBean} alt="" />
            </BeanImageWrapper>
            <NodeImageWrapper>
              <Image src={RunNode} alt="" />
            </NodeImageWrapper>
            <HandsWrapper>
              <Lottie animationData={lottieHands} loop={true} />
            </HandsWrapper>
          </ImagesWrapper>
          <FeatureContentWrapper>
            <FeatureContent
              heading="Bump up the energy"
              paragraph="Say goodbye to meeting fatigue. Say hello to participation. Keep everyone engaged with emoji reactions, sound effects, a hand-raise queue, polls, flashcards, music, and GIFs."
              buttonText="Show me the energy"
            />
          </FeatureContentWrapper>
        </SectionTop>
        <SectionBottom>
          <ImagesWrapper>
            <StyledImage src={RunTrueDottedImg} alt="" />
          </ImagesWrapper>
          <FeatureContentWrapper>
            <FeatureContent
              heading="All your favorite facilitation tools, minus all the tabs"
              paragraph="Stop juggling countless apps and tools. Keep everyone focused on one window and one outcome. Access polls, flashcards, videos, music, Miro, MURAL, Google Docs, and more—all inside the Butter window."
              buttonText="See all integrations"
            />
          </FeatureContentWrapper>
        </SectionBottom>
      </StyledFeatureRun>
    </div>
  );
}

const StyledImage = styled(Image)`
  width: 100%;
  height: fit-content;
  max-width: 400px;

  @media ${screen.laptop} {
    max-width: 600px;
  }
`;

const ImagesWrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
  position: relative;
  flex-shrink: 0;
`;

const AbsoluteWrapper = styled.div`
  position: absolute;
`;

const BeanImageWrapper = styled(AbsoluteWrapper)`
  top: 40%;
  right: -4%;
  max-width: 90px;
  transform: rotate(12deg);
  overflow: hidden;
  border-radius: 20px;
`;

const ChatImageWrapper = styled(AbsoluteWrapper)`
  top: 0%;
  left: 0;
  max-width: 100%;
`;

const NodeImageWrapper = styled(AbsoluteWrapper)`
  bottom: 3%;
  left: 33%;
  max-width: 70px;
`;

const HandsWrapper = styled(AbsoluteWrapper)`
  top: -5%;
  right: 5%;
  max-width: 130px;
  transform: rotate(-10deg);
`;

const StyledFeatureRun = styled(FeaturePaper)`
  background-color: ${(p) => p.theme['light-green']};
`;

const FeatureContentWrapper = styled.div`
  margin-top: 40px;

  @media ${screen.laptop} {
    margin-top: 0;
  }
`;

const SectionTop = styled(StyledFeatureSection)`
  flex-direction: row-reverse;
`;

const SectionBottom = styled(StyledFeatureSection)`
  margin-top: 120px;
`;

export default FeatureRun;
