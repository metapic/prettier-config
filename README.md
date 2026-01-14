# Metapic prettier-config

Standard [Prettier configuration](https://prettier.io/docs/sharing-configurations) for Metapic projects. See [`index.ts`](./src/index.ts) for the specific rules.

## Usage

Install the package:

```
pnpm add -D jiti prettier @metapic/prettier-config
```

Create an `prettier.config.ts` file:

```typescript
import metapicConfig from '@metapic/prettier-config'

export default metapicConfig
```

Alternatively, if you want to override any of the default settings:

```typescript
import metapicConfig from '@metapic/prettier-config'
import { type Config } from 'prettier'

const config: Config = {
  ...metapicConfig,
  printWidth: 80,
  semi: true,
}

export default config
```
