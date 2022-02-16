module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss")
        }
      }
    }
  ],
  babel: async options => ({
    ...options
  }),
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["sass-loader"]
    });
    return config;
  }
};
