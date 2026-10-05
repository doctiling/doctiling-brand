# @doctiling/brand

Design tokens of Doctiling — colors (light/dark), typography, radius, spacing — as plain TypeScript, zero
dependencies, no build. Shared by the web app (`doctiling-web`, Next.js) and the mobile app
(`doctiling-mobile`, Expo / React Native).

**Source of truth for the values**: `src/app/globals.css` in `doctiling-web` (HSL vars of `:root` / `.dark`).
This package mirrors them in hex because React Native cannot read CSS custom properties. The web suite
(`tests/lib/brand-tokens.test.ts`) fails if the installed tokens drift from `globals.css`.

## Consume

Pin a tag through the HTTPS tarball (no git needed in Docker / EAS builders):

```json
"@doctiling/brand": "https://codeload.github.com/doctiling/doctiling-brand/tar.gz/refs/tags/v0.1.0"
```

```ts
import { lightColors, typography } from '@doctiling/brand';
```

Web lists it in `transpilePackages` (raw TS). Mobile's Metro transpiles it like any dependency.

## Change the palette

1. Edit `globals.css` in doctiling-web and the matching hex here; `npm run gate`.
2. Bump `version` in `package.json`, tag `vX.Y.Z`, push the tag (CI runs the gate on tags).
3. Bump the tag in web and mobile (`npx -y npm@10.8.2 install`), each in its own PR; the web brand test
   proves the two now agree.

License: see `LICENSE` (public source, not open-licensed).
