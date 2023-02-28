import { forwardRef, PropsWithChildren, ReactElement } from "react";

import * as Accordion from "@radix-ui/react-accordion";
import styled from "styled-components";

import Typography from "@/uikit/Typography";

interface IProps {
  className?: string;
}

const AccordionContentBase = forwardRef<any, PropsWithChildren<IProps>>(
  ({ className, children }, ref) => {
    return (
      <Content className={className}>
        <ContentText ref={ref}>{children}</ContentText>
      </Content>
    );
  }
);

AccordionContentBase.displayName = "AccordionContentBase";

const AccordionContent = styled(AccordionContentBase)`
  &[data-state="open"] {
    animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state="closed"] {
    animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
`;

const Content = styled(Accordion.Content)`
  overflow: hidden;
`;

const ContentText = styled(Typography)`
  padding-top: 35px;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
`;

export default AccordionContent;
