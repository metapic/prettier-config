import { type Config } from 'prettier'

const config: Config = {
  printWidth: 140,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ['**/*.json'],
      options: {
        printWidth: 80,
        parser: 'json',
      },
    },
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
        printWidth: 80,
        parser: 'jsonc',
      },
    },
  ],
}

export default config
