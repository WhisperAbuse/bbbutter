import { ReactElement } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { screen } from '@/global/breakpoints';
import Heading from '@/uikit/Heading';
interface IProps {
  className?: string;
}

function AnimatedDotBase({ className }: IProps): ReactElement {
  return (
    <FaqHeading className={className}>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        style={{ originX: 0.5, originY: 0.65 }}
      >
        .
      </motion.div>
    </FaqHeading>
  );
}

const AnimatedDot = styled(AnimatedDotBase)`
  position: absolute;
  right: 0;
`;

const FaqHeading = styled(Heading)`
  font-size: 100px;
  margin-top: -5px;
  position: relative;

  @media ${screen.tablet} {
    font-size: 125px;
  }

  @media ${screen.laptopL} {
    font-size: 200px;
  }
`;

export default AnimatedDot;
