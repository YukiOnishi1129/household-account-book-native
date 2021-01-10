module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // 絶対パス化:https://zenn.dev/pankuz/articles/91f85e1fcfbfc505781b
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './assets',
            src: './src',
          },
        },
      ],
    ],
  };
};
