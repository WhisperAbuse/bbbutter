import { ReactElement } from 'react';

import * as Accordion from '@radix-ui/react-accordion';
import Image from 'next/image';
import styled from 'styled-components';

import { FaqData } from '@/global/types';
import AccordionItem from '@/uikit/AccordionItem';

const faqs: FaqData[] = [
  {
    question: 'Why should I use Butter?',
    answer: (
      <span>
        Other video conferencing tools aren’t built for collaboration. They’re
        built for conversations. Butter, on the other hand, is built for
        planning, running, and recapping engaging and interactive collaborative
        sessions. We focus on empowering facilitators, moderators, and hosts by
        giving them all the tools they need to engage participants in one place.
        <br />
        <br />
        You can set up your agenda and tools in advance, create tons of
        engagement during your session, and then wrap things up with ease. Teams
        also have one workspace to collaborate, share templates, and access
        recaps for all their sessions.
      </span>
    ),
  },
  {
    question: 'What types of sessions is Butter best for?',
    answer: (
      <span>
        Butter isn’t built for those could-have-been-an-email meetings. You know
        the ones! 🥱 <br />
        Butter is a tool for facilitating highly-collaborative sessions like
        workshops, training sessions, bootcamps, courses, events, interactive
        webinars, social events, or any other session where you need to keep
        people energized and productive.
        <br />
        <br />
        Of course, you can use Butter for everyday meetings too. But it’s so
        much more than a meeting tool.
      </span>
    ),
  },
  {
    question: 'Is Butter free?',
    answer: (
      <span>
        Pretty much! Our free plan lets you run group sessions for up to 45
        minutes with as many as 25 participants. One-on-one sessions are
        unlimited and free.
        <br />
        <br />
        Our paid plans comes with no time limits, unlimited rooms, ability to
        record, and add custom logos and wallpapers to your sessions!
        <br />
        <br />
        Read all about pricing here.
      </span>
    ),
  },
];

interface IProps {
  className?: string;
}

function WhatTheFAQBase({ className }: IProps): ReactElement {
  return (
    <Container className={className}>
      <AccordionRoot type="multiple">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} faqData={faq} value={`item${index}`} />
        ))}
      </AccordionRoot>
    </Container>
  );
}

const WhatTheFAQ = styled(WhatTheFAQBase)``;

const Container = styled.div``;

const AccordionRoot = styled(Accordion.Root)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default WhatTheFAQ;
