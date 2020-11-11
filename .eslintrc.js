module.exports = {
  root: true,
  extends: ['@react-native-community'],
  plugins: ['react', 'react-native', 'react-hooks'],
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
  globals: {
    fetch: false,
  },
};
