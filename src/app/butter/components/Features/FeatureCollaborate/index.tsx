import { ReactElement } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import { screen } from '@/global/breakpoints';
import OnlyMobile from '@/shared/Breakpoints/OnlyMobile';
import OnlyTabletDesktop from '@/shared/Breakpoints/OnlyTabletDesktop';
import FeaturePaper from '@/shared/FeaturePaper';
import CollaborateDottedImg from 'public/media/features/collaborate_dotted_pattern.png';

import FeatureContent from '../Content';
import StyledFeatureSection from '../StyledFeatureSection';
import Title from '../Title';

interface IProps {
  className?: string;
}

function FeatureCollaborate({ className }: IProps): ReactElement {
  return (
    <div>
      <OnlyTabletDesktop>
        <Title title="Collaborate" rotateAngle={10} align="right" />
      </OnlyTabletDesktop>
      <OnlyMobile>
        <Title
          title={
            <>
              Colla
              <br />
              borate
            </>
          }
          rotateAngle={10}
          align="right"
        />
      </OnlyMobile>
      <StyledFeatureCollaborate>
        <StyledFeatureSection>
          <ImagesWrapper>
            <StyledImage src={CollaborateDottedImg} alt="" />
          </ImagesWrapper>
          <FeatureContentWrapper>
            <FeatureContent
              heading="One workspace for all your team’s sessions"
              paragraph="Your Butter workspace gives your team one place to create rooms, share templates, and access recaps. Save on session setup time, create team-wide consistency, and keep tabs on your team’s sessions."
              buttonText="Create workspace"
            />
          </FeatureContentWrapper>
        </StyledFeatureSection>
      </StyledFeatureCollaborate>
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

const StyledFeatureCollaborate = styled(FeaturePaper)`
  background-color: ${(p) => p.theme['light-pink']};
`;

const FeatureContentWrapper = styled.div`
  margin-top: 40px;

  @media ${screen.laptop} {
    margin-top: 0;
  }
`;

export default FeatureCollaborate;
