import { ReactElement, useEffect, useRef, useState } from 'react';

import { useInView } from 'framer-motion';
import styled, { css } from 'styled-components';

import { screen } from '@/global/breakpoints';
import Typography from '@/uikit/Typography';

interface IProps {
  className?: string;
}

function LargeParagraphBase({ className }: IProps): ReactElement {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    if (isInView && !highlight) {
      setHighlight(true);
    }
  }, [isInView]);

  return (
    <Typography className={className}>
      <strong>All your team’s facilitation tools in one place.</strong> Stop
      hosting snoozefests. Start collaborating effectively. Butter brings{' '}
      <HighlightedText ref={ref} highlight={highlight}>
        structure, energy, and joy
      </HighlightedText>{' '}
      to your meetings, workshops, and training sessions.
    </Typography>
  );
}

const LargeParagraph = styled(LargeParagraphBase)`
  font-size: 32px;
  line-height: 1;
  font-weight: 300;

  @media ${screen.tablet} {
    font-size: 48px;
  }

  @media ${screen.laptop} {
    font-size: 64px;
  }
`;

const HighlightedText = styled.span<{ highlight: boolean }>`
  background-size: 0 100%;
  ${(p) =>
    p.highlight &&
    css`
      text-decoration: none;
      background-image: linear-gradient(
        to right,
        ${(p) => p.theme.main} 0,
        ${(p) => p.theme.main} 100%
      );
      background-size: 100% 100%;
      background-repeat: no-repeat;
    `}
  transition: background 1s;
`;

export default LargeParagraph;
