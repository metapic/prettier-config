import { type Config } from 'prettier'

const config: Config = {
  printWidth: 100,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ['*.tsx', '*.jsx', '*.vue'],
      options: {
        printWidth: 140,
      },
    },
    {
      files: ['**/*.json'],
      options: {
        printWidth: 80,
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
