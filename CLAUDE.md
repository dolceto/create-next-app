# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Next.js 16 보일러플레이트 템플릿 - styled-components 기반

## 빌드 및 개발 명령어

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트
npm run lint

# 린트 자동 수정
npm run lint:fix

# 코드 포맷팅
npm run format
```

## 기술 스택

- **Framework**: Next.js 16 (Pages Router)
- **Language**: TypeScript
- **Styling**: styled-components + styled-normalize
- **Linting**: ESLint + Prettier + GTS
- **Git Hooks**: Husky + Commitlint

## 프로젝트 구조

```
├── pages/           # 페이지 컴포넌트
│   ├── _app.tsx     # App wrapper (ThemeProvider)
│   ├── _document.tsx # HTML Document 설정
│   └── index.tsx    # 홈페이지
├── styles/          # 스타일 관련
│   ├── theme.ts     # 테마 정의 (light/dark)
│   ├── global-styles.ts # 전역 스타일
│   └── styled.d.ts  # styled-components 타입 확장
```

## 테마 사용법

```typescript
import styled from 'styled-components';

const Button = styled.button`
  background: ${({theme}) => theme.colors.primary};
  padding: ${({theme}) => theme.spacing.md};
`;
```
