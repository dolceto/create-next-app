import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({theme}) => theme.colors.background};
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.body};
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: ${({theme}) => `${theme.spacing.lg} ${theme.spacing.md}`};
`;

export function Layout({children}: LayoutProps) {
  return (
    <Wrapper>
      <Main>{children}</Main>
    </Wrapper>
  );
}
