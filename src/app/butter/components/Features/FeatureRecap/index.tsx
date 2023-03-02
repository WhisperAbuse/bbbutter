import { ReactElement } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import { screen } from '@/global/breakpoints';
import FeaturePaper from '@/shared/FeaturePaper';
import RecapDottedImg from 'public/media/features/recap_dotted_pattern.png';

import FeatureContent from '../Content';
import StyledFeatureSection from '../StyledFeatureSection';
import Title from '../Title';

interface IProps {
  className?: string;
}

function FeatureRecap({ className }: IProps): ReactElement {
  return (
    <div>
      <Title title="Recap" />
      <StyledFeatureRecap>
        <StyledFeatureSection>
          <ImagesWrapper>
            <StyledImage src={RecapDottedImg} alt="" />
          </ImagesWrapper>
          <FeatureContentWrapper>
            <FeatureContent
              heading="Don’t forget your takeaways"
              paragraph="Summarize your sessions and capture outcomes in seconds. Access and share your recordings, personal notes, chat logs, and poll results from any session—all from one dashboard."
              buttonText="Take a look"
            />
          </FeatureContentWrapper>
        </StyledFeatureSection>
      </StyledFeatureRecap>
    </div>
  );
}

const ImagesWrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
  position: relative;
  flex-shrink: 0;
`;

const AbsoluteWrapper = styled.div`
  position: absolute;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: fit-content;
  max-width: 400px;

  @media ${screen.laptop} {
    max-width: 600px;
  }
`;

const StyledFeatureRecap = styled(FeaturePaper)`
  background-color: ${(p) => p.theme.peach};
`;

const FeatureContentWrapper = styled.div`
  margin-top: 40px;

  @media ${screen.laptop} {
    margin-top: 0;
  }
`;

export default FeatureRecap;
