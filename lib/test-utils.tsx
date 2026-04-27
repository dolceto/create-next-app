import {render, type RenderOptions} from '@testing-library/react';
import {ThemeProvider} from 'styled-components';
import {lightTheme} from '@/styles/theme';

function AllProviders({children}: {children: React.ReactNode}) {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}

function renderWithTheme(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, {wrapper: AllProviders, ...options});
}

export * from '@testing-library/react';
export {renderWithTheme as render};
