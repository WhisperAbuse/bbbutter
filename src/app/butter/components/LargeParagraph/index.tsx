import { ReactElement } from "react";

import styled from "styled-components";

import Typography from "@/uikit/Typography";

interface IProps {
  className?: string;
}

function LargeParagraphBase({ className }: IProps): ReactElement {
  return (
    <Typography className={className}>
      <strong>All your team’s facilitation tools in one place.</strong> Stop
      hosting snoozefests. Start collaborating effectively. Butter brings{" "}
      <HighlightedText>structure, energy, and joy</HighlightedText> to your
      meetings, workshops, and training sessions.
    </Typography>
  );
}

const LargeParagraph = styled(LargeParagraphBase)`
  font-size: 32px;
  line-height: 1;
  font-weight: 300;
`;

const HighlightedText = styled.span`
  background-color: ${(p) => p.theme.main};
`;

export default LargeParagraph;
