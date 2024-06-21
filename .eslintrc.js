module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021, // Use the latest ECMAScript version
    sourceType: 'module', // Allow the use of imports
  },
  env: {
    node: true, // Node.js global variables and Node.js scoping
    browser: true, // browser global variables
    es2021: true, // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12
  },
  extends: [
    'eslint:recommended', // Use ESLint's recommended rules
    // Add more configurations or plugins here
  ],
  rules: {
    // Customize your rules here
    // Example:
    // 'no-console': 'off', // Allows the use of console.log() in development
  },
};
