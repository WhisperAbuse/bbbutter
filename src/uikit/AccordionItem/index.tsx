import { ReactElement } from 'react';

import * as Accordion from '@radix-ui/react-accordion';
import styled from 'styled-components';

import { FaqData } from '@/global/types';

import AccordionContent from './AccordionContent';
import AccordionTrigger from './AccordionTrigger';

interface IProps {
  className?: string;
  faqData: FaqData;
  value: string;
}

function AccordionItemBase({
  className,
  faqData,
  value,
}: IProps): ReactElement {
  const { question, answer } = faqData;

  return (
    <Container className={className} value={value}>
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </Container>
  );
}

const AccordionItem = styled(AccordionItemBase)`
  padding: 30px 15px;
  background-color: white;
  box-shadow: 0 0 1px 0 rgba(66, 71, 76, 0.25),
    0 8px 48px 0 rgba(10, 11, 30, 0.08), 0 4px 8px 0 rgba(10, 11, 30, 0.06);
  border-radius: 30px;
`;

const Container = styled(Accordion.Item)``;

export default AccordionItem;
