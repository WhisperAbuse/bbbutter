import { ReactElement, PropsWithChildren } from 'react';

import styled from 'styled-components';

interface IProps {
  className?: string;
}

function PageContentWrapBase({
  className,
  children,
}: PropsWithChildren<IProps>): ReactElement {
  return <Container className={className}>{children}</Container>;
}

const PageContentWrap = styled(PageContentWrapBase)`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

const Container = styled.div``;

export default PageContentWrap;
