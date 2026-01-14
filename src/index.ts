import { type Config } from 'prettier'

const config: Config = {
  printWidth: 140,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: [
        '**/*.jsonc',
        '**/tsconfig.json',
        '**/tsconfig.*.json',
        '.vscode/*.json',
        // Keep strict JSON for devcontainer settings for maximum compatibility
        // '.devcontainer/*.json',
      ],
      options: {
        singleQuote: false,
        trailingComma: 'all',
        parser: 'jsonc',
      },
    },
  ],
}

export default config
