module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@navigators': './src/navigators',
          '@theme': './src/theme',
          '@screens': './src/screens',
          '@components': './src/components',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
