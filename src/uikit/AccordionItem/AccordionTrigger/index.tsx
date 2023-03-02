import { FC, forwardRef, PropsWithChildren, ReactElement } from 'react';

import * as Accordion from '@radix-ui/react-accordion';
import Image from 'next/image';
import styled from 'styled-components';

import { screen } from '@/global/breakpoints';
import Heading from '@/uikit/Heading';
import Typography from '@/uikit/Typography';
import PlusImg from 'public/media/common/plus.png';

interface IProps {
  className?: string;
}

const AccordionTriggerBase = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<IProps>
>(({ className, children }, ref) => {
  return (
    <AccordionHeader>
      <Trigger className={className} ref={ref}>
        <AccordionHeading>{children}</AccordionHeading>
        <AccordionPlus src={PlusImg} alt="Toggle accordion" />
      </Trigger>
    </AccordionHeader>
  );
});

AccordionTriggerBase.displayName = 'AccordionTriggerBase';

const AccordionTrigger = styled(AccordionTriggerBase)`
  padding: 30px 15px;
  cursor: pointer;

  @media ${screen.tablet} {
    padding: 45px 40px;
  }
`;

const AccordionHeader = styled(Accordion.Header)``;

const AccordionHeading = styled(Heading)`
  font-size: 16px;
  text-align: left;

  @media ${screen.tablet} {
    font-size: 32px;
    font-weight: 700;
  }
`;

const AccordionPlus = styled(Image)`
  width: 24px;
  height: 24px;
  transition: transform 300ms;
`;

const Trigger = styled(Accordion.Trigger)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  background-color: transparent;

  &[data-state='open'] > ${AccordionPlus} {
    transform: rotate(45deg);
  }
`;

export default AccordionTrigger;
