# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 빌드 및 개발 명령어

```bash
# 의존성 설치 (pnpm만 허용)
pnpm install

# 개발 서버
pnpm dev

# 프로덕션 빌드
pnpm build

# 린트 검사
pnpm lint

# 린트 자동 수정
pnpm lint:fix

# 코드 포맷팅
pnpm format
```

## 아키텍처

- **Next.js 16 Pages Router** - App Router가 아닌 Pages Router 사용
- **SWC 컴파일러** - styled-components 지원 활성화 (`next.config.mjs`)
- **styled-components** - SSR 설정 포함 (`_document.tsx`에서 `ServerStyleSheet` 사용)
- **테마 시스템** - `lightTheme`/`darkTheme` 정의됨 (`styles/theme.ts`)

### 핵심 파일

| 파일                  | 역할                               |
| --------------------- | ---------------------------------- |
| `pages/_app.tsx`      | ThemeProvider, GlobalStyle 설정    |
| `pages/_document.tsx` | styled-components SSR 설정         |
| `styles/theme.ts`     | 테마 토큰 (colors, spacing, fonts) |
| `styles/styled.d.ts`  | DefaultTheme 타입 확장             |

### 경로 별칭

`@/*` → 프로젝트 루트 (예: `@/styles/theme`)

## 코드 스타일

- **ESLint 9 Flat Config** + **eslint-config-prettier** (`eslint.config.mjs`)
- `@typescript-eslint/no-unused-vars`: `^_` 패턴 허용
- `@typescript-eslint/no-explicit-any`: 경고
- **Prettier**: singleQuote, bracketSpacing: false

## 커밋 규칙

`type(scope): 설명` - scope 필수 (commitlint)

```bash
feat(auth): 로그인 기능 추가
fix(api): 응답 파싱 오류 수정
```

## Git Hooks (Husky)

- **pre-commit**: `lint-staged` 실행 (변경된 파일만 검사)
- **commit-msg**: commitlint 검증

## styled-components 사용

```typescript
import styled from 'styled-components';

const Box = styled.div`
  background: ${({theme}) => theme.colors.background};
  padding: ${({theme}) => theme.spacing.md};
`;
```

### 테마 토큰

- `theme.colors`: primary, secondary, background, text, border
- `theme.spacing`: xs(4px), sm(8px), md(16px), lg(24px), xl(32px)
- `theme.fonts.body`: 시스템 폰트 스택
