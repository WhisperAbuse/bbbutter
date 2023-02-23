import styled from "styled-components";

import Button from "@/uikit/Button";
import Heading from "@/uikit/Heading";
import Typography from "@/uikit/Typography";

export default function Hero() {
  return (
    <Container>
      <HeadingWrapper>
        <Heading asComponent="h1" fontSize={48}>
          Run more engaging sessions. Get better outcomes.
        </Heading>
      </HeadingWrapper>
      <Typography>
        Butter’s agenda planner, delightful interactions, and integrated
        collaboration tools let you run super-engaging workshops, trainings, and
        meetings—without juggling a million tools.
      </Typography>
      <HeroButtonsWrapper>
        <Button fullWidth variant="primary-dark">
          Try Butter for free
        </Button>
        <Button fullWidth>Book a demo</Button>
      </HeroButtonsWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: middle;
  padding: 150px 16px 100px;
  background-color: ${(p) => p.theme.main};
`;

const HeadingWrapper = styled.div`
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
  width: 100%;
  padding-bottom: 20px;
`;

const HeroButtonsWrapper = styled.div`
  padding-top: 32px;
  display: flex;
  max-width: fit-content;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 8px;
`;
