module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": [
    "airbnb-base",
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    'prettier/prettier': ['error', { singleQuote: true }],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    '@typescript/interface-name-prefix' : 'off',
    "import/no-extraneous-dependencies": ["off", {"devDependencies": false, "optionalDependencies": false, "peerDependencies": false}]
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js", ".ts"
        ],
        "moduleDirectory": [
          "node_modules", "src/"
        ]
      },
    }
  }
};
