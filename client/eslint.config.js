import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
   {
      files: ['**/*.{ts,tsx}'],
      ignores: ['dist'],
      languageOptions: {
         parser: tsParser,
         ecmaVersion: 2020,
         sourceType: 'module',
         globals: globals.browser,
      },
      plugins: {
         'react-hooks': reactHooks,
         'react-refresh': reactRefresh,
         '@typescript-eslint': tseslint,
      },
      extends: [
         'react-app',
         js.configs.recommended,
         'plugin:@typescript-eslint/recommended',
         'plugin:react-hooks/recommended',
      ],
      rules: {
         ...reactHooks.configs.recommended.rules,
         '@typescript-eslint/no-unused-vars': [
            'warn',
            { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }, // Vars ve argümanlar için ignore deseni
         ],
         'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
         ],
         'unused-imports/no-unused-imports': 'error', // Kullanılmayan import'ları işaretler
         '@typescript-eslint/no-unused-vars': [
            'warn',
            { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
         ],
      },
   },
];
