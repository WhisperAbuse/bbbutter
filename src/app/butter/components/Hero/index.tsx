import styled from 'styled-components';

import { screen } from '@/global/breakpoints';
import Button from '@/uikit/Button';
import Heading from '@/uikit/Heading';
import PageContentWrap from '@/uikit/PageContentWrap';
import Typography from '@/uikit/Typography';

export default function Hero() {
  return (
    <Container>
      <PageContentWrap>
        <HeadingWrapper>
          <Title asComponent="h1">
            Run more engaging sessions.
            <br />
            Get better outcomes.
          </Title>
        </HeadingWrapper>
        <Description>
          Butter’s agenda planner, delightful interactions, and integrated
          collaboration tools let you run super-engaging workshops, trainings,
          and meetings—without juggling a million tools.
        </Description>
        <HeroButtonsWrapper>
          <TryButterButton fullWidth variant="primary-dark">
            Try Butter for free
          </TryButterButton>
          <DemoButton fullWidth>Book a demo</DemoButton>
        </HeroButtonsWrapper>
      </PageContentWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: middle;
  padding: 150px 0 100px;
  background-color: ${(p) => p.theme.main};
`;

const HeadingWrapper = styled.div`
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
  width: 100%;
  padding-bottom: 20px;
`;

const Title = styled(Heading)`
  font-size: 48px;

  @media ${screen.tablet} {
    font-size: 62px;
  }
`;

const Description = styled(Typography)`
  text-align: center;
  line-height: 140%;
  font-weight: 300;
  font-size: 18px;

  @media ${screen.tablet} {
    font-size: 20px;
  }
`;

const HeroButtonsWrapper = styled.div`
  padding-top: 32px;
  display: flex;
  max-width: fit-content;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 8px;

  @media ${screen.tablet} {
    flex-direction: row;
    gap: 12px;
  }
`;

const TryButterButton = styled(Button)`
  white-space: nowrap;

  @media ${screen.laptop} {
    font-size: 18px;
  }
`;

const DemoButton = styled(Button)`
  @media ${screen.laptop} {
    font-size: 18px;
  }
`;
