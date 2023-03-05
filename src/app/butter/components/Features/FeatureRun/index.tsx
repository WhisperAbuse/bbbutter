import { ReactElement } from 'react';

import Lottie from 'lottie-react';
import Image from 'next/image';
import styled from 'styled-components';

import { screen } from '@/global/breakpoints';
import useAnimatedImages from '@/hooks/useAnimatedImages';
import FeaturePaper from '@/shared/FeaturePaper';
import lottieHands from 'public/media/animations/lottie-anim-hands.json';
import RunBean from 'public/media/features/mrbean.gif';
import RunChat from 'public/media/features/run_bumb_chat.png';
import RunDottedImg from 'public/media/features/run_bumb_dotted_pattern.png';
import RunNode from 'public/media/features/run_bumb_node.png';
import RunTrueDottedImg from 'public/media/features/run_true_dotted_pattern.png';

import AnimatedImagesWrapper from '../AnimatedImagesWrapper';
import FeatureContent from '../Content';
import StyledFeatureSection from '../StyledFeatureSection';
import Title from '../Title';

interface IProps {
  className?: string;
}

function FeatureRun({ className }: IProps): ReactElement {
  const { containerRef, onMouseMove, rotateX, rotateY, setInitialAnimation } =
    useAnimatedImages();

  return (
    <div>
      <Title title="Run" rotateAngle={10} align="right" />
      <StyledFeatureRun>
        <div
          ref={containerRef}
          onMouseMove={onMouseMove}
          onMouseLeave={setInitialAnimation}
        >
          <SectionTop>
            <AnimatedImagesWrapper rotateX={rotateX} rotateY={rotateY}>
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
            </AnimatedImagesWrapper>
            <FeatureContentWrapper>
              <FeatureContent
                heading="Bump up the energy"
                paragraph="Say goodbye to meeting fatigue. Say hello to participation. Keep everyone engaged with emoji reactions, sound effects, a hand-raise queue, polls, flashcards, music, and GIFs."
                buttonText="Show me the energy"
              />
            </FeatureContentWrapper>
          </SectionTop>
        </div>
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
  max-width: 20%;
  overflow: hidden;
  border-radius: 20px;
  transform: rotate(12deg) translate3d(0, 0, 400px);
`;

const ChatImageWrapper = styled(AbsoluteWrapper)`
  top: 10%;
  left: 10%;
  max-width: 80%;
  transform: translate3d(0, 0, 300px);
`;

const NodeImageWrapper = styled(AbsoluteWrapper)`
  bottom: 3%;
  left: 33%;
  max-width: 20%;
  transform: translate3d(0, 0, 400px);
`;

const HandsWrapper = styled(AbsoluteWrapper)`
  top: -5%;
  right: 5%;
  max-width: 30%;
  transform: rotate(-10deg) translate3d(0, 0, 400px);
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
