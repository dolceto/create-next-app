# Next.js Boilerplate Template

Next.js 16 + styled-components 기반 보일러플레이트

## 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | Next.js 16 (Pages Router) |
| Language | TypeScript 5.9 |
| Styling | styled-components 6, styled-normalize |
| Linting | ESLint, Prettier, GTS |
| Git Hooks | Husky, Commitlint |

## 시작하기

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인

## 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm start` | 프로덕션 서버 실행 |
| `npm run lint` | 린트 검사 |
| `npm run lint:fix` | 린트 자동 수정 |
| `npm run format` | Prettier 포맷팅 |

## 디렉토리 구조

```
├── .husky/              # Husky 라이브러리 관련 설정
├── components/          # 컴포넌트 파일, 유닛 테스트 파일
├── pages/               # 페이지 파일, 엔드포인트 테스트 파일
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── styles/              # 글로벌 스타일, 테마 파일 (styled-components)
│   ├── global-styles.ts
│   ├── styled.d.ts
│   └── theme.ts
├── .babelrc
├── .eslintrc.json
├── .prettierrc.js
├── commitlint.config.js
├── package.json
└── tsconfig.json
```

| 디렉토리 | 설명 |
|----------|------|
| `.husky/` | Husky 라이브러리 관련 설정 |
| `components/` | 컴포넌트 파일, 유닛 테스트 파일 |
| `pages/` | 페이지 파일, 엔드포인트 테스트 파일 |
| `styles/` | 글로벌 스타일, 테마 파일 (styled-components) |

## 파일 설정

| 파일 | 설명 |
|------|------|
| `pages/_app.tsx` | styled-components의 global-style, theme 설정 |
| `pages/_document.tsx` | styled-components의 SSR 사용 위한 설정 |
| `.babelrc` | styled-components의 SSR 사용 위한 설정 |
| `.eslintrc.json`, `.prettierrc.js` | GTS(Google TypeScript) 코드 스타일 설정 |
| `commitlint.config.js` | Commitlint 컨벤션 설정 |

## 테마 사용

```typescript
import styled from 'styled-components';

const Box = styled.div`
  background: ${({theme}) => theme.colors.background};
  color: ${({theme}) => theme.colors.text};
  padding: ${({theme}) => theme.spacing.md};
`;
```

### 테마 속성

```typescript
// colors
theme.colors.primary     // #007bff
theme.colors.secondary   // #6c757d
theme.colors.background  // #ffffff
theme.colors.text        // #212529
theme.colors.border      // #dee2e6

// spacing
theme.spacing.xs  // 4px
theme.spacing.sm  // 8px
theme.spacing.md  // 16px
theme.spacing.lg  // 24px
theme.spacing.xl  // 32px
```

## 커밋 규칙

Conventional Commits 형식 필수

```
feat: 새로운 기능
fix: 버그 수정
docs: 문서 수정
style: 코드 스타일 변경
refactor: 리팩토링
test: 테스트 추가
chore: 빌드, 설정 변경
```

## 라이선스

MIT
