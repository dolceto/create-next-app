import styled, {css} from 'styled-components';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const sizeStyles = {
  sm: css`
    padding: ${({theme}) => `${theme.spacing.xs} ${theme.spacing.sm}`};
    font-size: ${({theme}) => theme.typography.size.sm};
  `,
  md: css`
    padding: ${({theme}) => `${theme.spacing.sm} ${theme.spacing.md}`};
    font-size: ${({theme}) => theme.typography.size.md};
  `,
  lg: css`
    padding: ${({theme}) => `${theme.spacing.sm} ${theme.spacing.lg}`};
    font-size: ${({theme}) => theme.typography.size.lg};
  `,
};

const variantStyles = {
  primary: css`
    background: ${({theme}) => theme.colors.primary};
    color: #ffffff;
    border: 1px solid ${({theme}) => theme.colors.primary};
    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  `,
  secondary: css`
    background: ${({theme}) => theme.colors.secondary};
    color: #ffffff;
    border: 1px solid ${({theme}) => theme.colors.secondary};
    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({theme}) => theme.colors.primary};
    border: 1px solid ${({theme}) => theme.colors.border};
    &:hover:not(:disabled) {
      background: ${({theme}) => theme.colors.border};
    }
  `,
};

const StyledButton = styled.button<{$variant: Variant; $size: Size}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({theme}) => theme.radius.md};
  font-weight: ${({theme}) => theme.typography.weight.medium};
  cursor: pointer;
  transition:
    opacity 0.15s,
    background 0.15s;
  font-family: ${({theme}) => theme.fonts.body};

  ${({$size}) => sizeStyles[$size]}
  ${({$variant}) => variantStyles[$variant]}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton $variant={variant} $size={size} {...props}>
      {children}
    </StyledButton>
  );
}
