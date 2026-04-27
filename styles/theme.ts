export const lightTheme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    background: '#ffffff',
    text: '#212529',
    border: '#dee2e6',
    error: '#dc3545',
    success: '#198754',
  },
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  typography: {
    size: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '20px',
      xl: '24px',
      xxl: '32px',
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  zIndex: {
    base: 0,
    dropdown: 100,
    sticky: 200,
    modal: 300,
    toast: 400,
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

export const darkTheme: typeof lightTheme = {
  colors: {
    primary: '#0d6efd',
    secondary: '#adb5bd',
    background: '#212529',
    text: '#f8f9fa',
    border: '#495057',
    error: '#f87171',
    success: '#4ade80',
  },
  fonts: lightTheme.fonts,
  typography: lightTheme.typography,
  spacing: lightTheme.spacing,
  radius: lightTheme.radius,
  zIndex: lightTheme.zIndex,
  breakpoints: lightTheme.breakpoints,
};

export type Theme = typeof lightTheme;
