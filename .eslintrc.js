module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
   {
    files:['*.ts', '*.tsx']
   }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project:['./tsconfig.json']
  },
  plugins: [
    'react'
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "indent":[
      "error",
      2
    ],
    "linebreak-style":[
      "error",
      "unix"
    ],
    "quotes":[
      "error",
      "single"
    ],
    "semi":[
      "error",
      "never"
    ],
    "eqeqeq":"error",
    "no-trailing-spaces":"error",
    "object-curly-spacing":[
      "error","always"
    ],
    "arrow-spacing":[
      "error",{"before":true,"after":true}
    ],
    "no-console":0,
    "react/react-in-jsx-scope":"off"
  },
  "settings":{
    "react":{
      "version":"detect"
    }
  }
}
