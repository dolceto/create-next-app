import styled, {keyframes} from 'styled-components';

interface SpinnerProps {
  size?: number;
}

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Circle = styled.span<{$size: number}>`
  display: inline-block;
  width: ${({$size}) => $size}px;
  height: ${({$size}) => $size}px;
  border: 2px solid ${({theme}) => theme.colors.border};
  border-top-color: ${({theme}) => theme.colors.primary};
  border-radius: ${({theme}) => theme.radius.full};
  animation: ${spin} 0.6s linear infinite;
`;

export function Spinner({size = 24}: SpinnerProps) {
  return <Circle $size={size} role="status" aria-label="로딩 중" />;
}
