module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        root: ['./App'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        alias: {
          '@app': `${__dirname}/App`,
          '@components': `${__dirname}/App/components`,
          '@screens': `${__dirname}/App/screens`,
        },
      },
    ],
  ],
};
