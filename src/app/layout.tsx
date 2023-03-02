'use client';
import { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from '@/lib/registry';
import './styles/index.scss';

const theme = {
  main: '#fffd63',
  secondary: 'white',
  dark: '#0a0b1e',
  light: '#fff',
  'light-purple': '#c7d0ff',
  'light-green': '#bff9ea',
  peach: '#ffd8aa',
  'light-pink': '#ffd5d5',
  'contrast-blue': '#80F4D5',
  'footer-link': '#ddd',
  'footer-copyright': '#999',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
