# Next.js Boilerplate

Next.js 16 + TypeScript + styled-components 보일러플레이트

## 기술 스택

| 분류            | 기술                                      |
| --------------- | ----------------------------------------- |
| Framework       | Next.js 16 (Pages Router)                 |
| Language        | TypeScript 5.9                            |
| Runtime         | Node.js 24 LTS                            |
| UI Library      | React 19                                  |
| Compiler        | SWC (styled-components 지원)              |
| Styling         | styled-components 6, styled-normalize     |
| Validation      | Zod                                       |
| Testing         | Vitest, Testing Library                   |
| Linting         | ESLint 9 (Flat Config), typescript-eslint |
| Formatting      | Prettier                                  |
| Git Hooks       | Husky, Commitlint, lint-staged            |
| Package Manager | pnpm 10.28.0 (필수)                       |

## Pages Router를 사용하는 이유

이 보일러플레이트는 App Router 대신 Pages Router를 사용합니다.

- 팀 내 Pages Router 경험이 많아 온보딩 비용이 낮음
- SSR/CSR 중심의 단순 서비스에 적합
- 빠른 MVP 개발이 목적인 프로젝트에 적합

서버 컴포넌트 활용이나 복잡한 레이아웃 중첩이 많은 서비스라면 App Router 전환을 검토하세요.

## 시작하기

```bash
# Node 버전 확인 (nvm 사용 시)
nvm use

# 의존성 설치
pnpm install

# 환경변수 설정
cp .env.example .env.local

# 개발 서버 실행
pnpm dev
```

http://localhost:3000 에서 확인

## 스크립트

| 명령어               | 설명                 |
| -------------------- | -------------------- |
| `pnpm dev`           | 개발 서버 실행       |
| `pnpm build`         | 프로덕션 빌드        |
| `pnpm start`         | 프로덕션 서버 실행   |
| `pnpm lint`          | 린트 검사            |
| `pnpm lint:fix`      | 린트 자동 수정       |
| `pnpm format`        | Prettier 포맷팅      |
| `pnpm test`          | 테스트 실행 (watch)  |
| `pnpm test:coverage` | 커버리지 리포트 생성 |

## 디렉토리 구조

```
├── .husky/                  # Git Hooks 설정
│   ├── pre-commit           # 커밋 전 lint 실행
│   └── commit-msg           # 커밋 메시지 검증
├── components/
│   └── common/              # 공통 UI 컴포넌트
│       ├── Button.tsx
│       ├── Layout.tsx
│       └── Spinner.tsx
├── constants/
│   └── routes.ts            # 라우트 상수
├── lib/
│   ├── env.ts               # 환경변수 검증 (Zod)
│   └── test-utils.tsx       # 테스트 헬퍼 (ThemeProvider 포함)
├── pages/                   # 페이지 라우팅
│   ├── _app.tsx             # 앱 진입점 (테마, 글로벌 스타일)
│   ├── _document.tsx        # HTML 문서 (styled-components SSR 설정)
│   └── index.tsx            # 메인 페이지
├── public/                  # 정적 파일 (이미지, 폰트 등)
├── styles/                  # 스타일 설정
│   ├── global-styles.ts     # 글로벌 스타일
│   ├── styled.d.ts          # 테마 타입 정의
│   └── theme.ts             # 테마 토큰
├── types/
│   └── api.ts               # 공통 API 응답 타입
├── .env.example             # 환경변수 템플릿
├── .nvmrc                   # Node 버전 고정 (24 LTS)
├── eslint.config.mjs        # ESLint 9 Flat Config 설정
├── commitlint.config.js     # 커밋 메시지 규칙
├── vitest.config.ts         # 테스트 설정
└── package.json
```

## 환경변수

`.env.example`을 복사해 `.env.local`을 만든 뒤 값을 채웁니다.

```bash
# .env.example 기준
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

환경변수는 `lib/env.ts`에서 Zod로 검증합니다. 새 변수를 추가할 때는 이 파일의 스키마도 함께 수정하세요.

```typescript
// lib/env.ts
const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
  // 여기에 추가
});
```

## 테마 사용

```typescript
import styled from 'styled-components';

const Box = styled.div`
  background: ${({theme}) => theme.colors.background};
  color: ${({theme}) => theme.colors.text};
  padding: ${({theme}) => theme.spacing.md};
  border-radius: ${({theme}) => theme.radius.md};
  font-size: ${({theme}) => theme.typography.size.md};
`;
```

### 테마 토큰

```typescript
theme.colors.primary / secondary / background / text / border / error / success

theme.spacing.xs(4px) / sm(8px) / md(16px) / lg(24px) / xl(32px) / xxl(48px)

theme.typography.size.xs~xxl
theme.typography.weight.regular / medium / semibold / bold

theme.radius.sm(4px) / md(8px) / lg(12px) / full

theme.zIndex.base / dropdown / sticky / modal / toast

theme.breakpoints.sm(640px) / md(768px) / lg(1024px) / xl(1280px)
```

## API Routes 컨벤션

Pages Router API Routes는 다음 구조를 따릅니다.

```
pages/api/{domain}/index.ts      # GET(list), POST
pages/api/{domain}/[id].ts       # GET(one), PUT, DELETE
```

공통 응답 타입(`types/api.ts`)을 사용하세요.

```typescript
import type {ApiResponse} from '@/types/api';

export default function handler(req, res) {
  const data = { ... };
  res.json({ ok: true, data } satisfies ApiResponse<typeof data>);
}
```

## 테스트 작성

테스트 파일은 테스트 대상 파일 옆에 위치시킵니다.

```
components/common/Button.tsx
components/common/Button.test.tsx
```

ThemeProvider가 필요한 컴포넌트는 `@/lib/test-utils`의 `render`를 사용하세요.

```typescript
import {render, screen} from '@/lib/test-utils';
import {Button} from './Button';

it('클릭 이벤트를 호출한다', () => {
  const onClick = vi.fn();
  render(<Button onClick={onClick}>클릭</Button>);
  screen.getByRole('button').click();
  expect(onClick).toHaveBeenCalledOnce();
});
```

## 커밋 규칙

`type(scope): 설명` 형식 필수

```bash
feat(auth): 로그인 기능 추가
fix(api): 응답 파싱 오류 수정
docs(readme): 설치 가이드 추가
refactor(button): 스타일 정리
chore(deps): 의존성 업데이트
```

| Type     | 설명             |
| -------- | ---------------- |
| feat     | 새로운 기능      |
| fix      | 버그 수정        |
| docs     | 문서 수정        |
| style    | 코드 스타일 변경 |
| refactor | 리팩토링         |
| test     | 테스트 추가      |
| chore    | 빌드, 설정 변경  |

## 라이선스

MIT
