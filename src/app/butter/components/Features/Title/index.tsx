'use client';
import { ReactElement } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { screen } from '@/global/breakpoints';
import Heading from '@/uikit/Heading';

type Align = 'left' | 'right';
interface IProps {
  className?: string;
  title: string | ReactElement;
  rotateAngle?: number;
  align?: Align;
}

function FeatureTitleBase({
  className,
  title,
  rotateAngle = -10,
  align = 'left',
}: IProps): ReactElement {
  return (
    <Container className={className} align={align}>
      <motion.div
        style={{ originX: 0.25, originY: 0.25 }}
        initial={{ rotate: 0 }}
        whileInView={{ rotate: rotateAngle }}
        transition={{ duration: 0.5 }}
      >
        <StyledHeading asComponent="h2">
          <span>{title}</span>

          <Dot
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            style={{ originX: 0.5, originY: 0.65 }}
          >
            <span>.</span>
          </Dot>
        </StyledHeading>
      </motion.div>
    </Container>
  );
}

const FeatureTitle = styled(FeatureTitleBase)`
  display: flex;
  width: fit-content;
`;

const Container = styled.div<{ align: Align }>`
  ${(p) => p.align === 'right' && '  margin-left: auto;'}
`;

const StyledHeading = styled(Heading)`
  display: flex;
  font-size: 100px;
  align-items: flex-end;
  @media ${screen.tablet} {
    font-size: 125px;
  }

  @media ${screen.laptopL} {
    font-size: 200px;
  }
`;

const Dot = styled(motion.div)``;

export default FeatureTitle;
