# @kokyusik91/kku-ui

멀티 스킨 디자인 키트 — Radix UI + CVA + Tailwind CSS Custom Properties 기반.

## Features

- **28개 컴포넌트** — Primitives, Layout, Feedback, Data Display, Composite
- **멀티 스킨** — neo-brutal, modern 등 스킨 교체만으로 전체 디자인 변경
- **다크모드** — `class="dark"` 추가로 자동 전환
- **Radix UI** — 접근성 보장된 headless 프리미티브 기반
- **CVA** — 타입 안전한 variant 관리
- **Tailwind CSS** — CSS Custom Properties 기반 디자인 토큰
- **Tree-shakable** — ESM/CJS 듀얼 빌드

## Install

```bash
pnpm add @kokyusik91/kku-ui
```

`.npmrc`에 레지스트리 설정:

```
@kokyusik91:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

## Setup

### Tailwind CSS

`tailwind.config.ts`에 원하는 스킨 프리셋 추가:

```ts
// Neo-brutal 스킨 (볼드 보더, 오프셋 쉐도우, Space Grotesk)
import { neoBrutalPreset } from "@kokyusik91/kku-ui/preset/neo-brutal";

// Modern 스킨 (미니멀, 소프트 쉐도우, Pretendard)
// import { modernPreset } from "@kokyusik91/kku-ui/preset/modern";

export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@kokyusik91/kku-ui/dist/**/*.js",
  ],
  presets: [neoBrutalPreset],
  // presets: [modernPreset],  // 스킨 교체는 이 한 줄만 바꾸면 끝!
};
```

### Font

```html
<!-- Neo-brutal -->
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Modern -->
<link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" rel="stylesheet">
```

### Dark Mode

```html
<!-- html에 dark 클래스 추가하면 자동 전환 -->
<html class="dark">
```

## Skins

### Neo-brutal

볼드한 3px 보더, 하드 오프셋 쉐도우, 코랄 레드 프라이머리.

| Token | Light | Dark |
|-------|-------|------|
| `skin-primary` | `#FF6B6B` | `#FF8A8A` |
| `skin-secondary` | `#4ECDC4` | `#6EE7D8` |
| `skin-accent` | `#FFE66D` | `#FFD93D` |
| Border | `3px` | `3px` |
| Radius | `12px` | `12px` |
| Shadow | `4px 4px 0px` offset | `4px 4px 0px` offset |
| Font | Space Grotesk | Space Grotesk |

### Modern

토스 스타일 미니멀 디자인. 1px 보더, 소프트 쉐도우.

| Token | Light | Dark |
|-------|-------|------|
| `skin-primary` | `#3182F6` | `#4C9AFF` |
| `skin-secondary` | `#00C9B7` | `#3DD9C6` |
| `skin-accent` | `#FFC107` | `#FFD54F` |
| Border | `1px` | `1px` |
| Radius | `8px` | `8px` |
| Shadow | soft blur | soft blur |
| Font | Pretendard | Pretendard |

## Components

### Primitives

| Component | Base | Description |
|-----------|------|-------------|
| `Button` | Native | 버튼 (filled/outline/ghost, 7 colors, 3 sizes) |
| `IconButton` | Native | 정사각형 아이콘 버튼 |
| `Badge` | Native | 라벨/태그 |
| `Input` | Native | 텍스트 입력 (에러 상태 지원) |
| `Textarea` | Native | 멀티라인 입력 |
| `Avatar` | Radix | 프로필 이미지 + 폴백 |
| `Toggle` | Radix | 토글 버튼 |
| `Checkbox` | Radix | 체크박스 (라벨 지원) |
| `RadioGroup` | Radix | 라디오 그룹 |
| `Select` | Radix | 드롭다운 셀렉트 |

### Layout

| Component | Description |
|-----------|-------------|
| `Card` | 카드 컨테이너 (shadow, padding variants) |
| `Container` | 반응형 max-width 래퍼 |
| `Divider` | 구분선 (라벨 지원) |

### Feedback

| Component | Base | Description |
|-----------|------|-------------|
| `Dialog` | Radix | 모달 다이얼로그 |
| `Tooltip` | Radix | 툴팁 |
| `Toast` | Radix | 토스트 알림 (success/error/warning/info) |

### Data Display

| Component | Description |
|-----------|-------------|
| `List` | 리스트 (plain/bordered/card) |
| `Table` | 데이터 테이블 (striped 지원) |

### Composite

`PricingCard` · `LoginCard` · `SocialPost` · `WeatherCard` · `ProductCard` · `SettingsMenu` · `AlarmCard` · `MessageBubble` · `ProfileCard` · `BlogPostCard`

## Usage

```tsx
import { Button, Card, Badge } from "@kokyusik91/kku-ui";

function App() {
  return (
    <Card shadow="lg" padding="lg">
      <Badge color="accent">New</Badge>
      <h2>Hello KKU-UI!</h2>
      <Button color="primary" onClick={() => alert("clicked!")}>
        Click me
      </Button>
    </Card>
  );
}
```

## Architecture

```
[Skin Preset] → :root { --skin-primary: #FF6B6B; ... }
              → .dark { --skin-primary: #FF8A8A; ... }
                   ↓
[Shared Theme] → colors.skin.primary: "var(--skin-primary)"
                   ↓
[Components]   → className="bg-skin-primary text-skin-text"
```

스킨이 바뀌어도 컴포넌트 코드는 변경 없음. preset만 교체하면 끝.

## Development

```bash
pnpm install
pnpm dev          # watch mode build
pnpm storybook    # http://localhost:6006
pnpm test         # vitest
pnpm build        # production build
```

## License

MIT
