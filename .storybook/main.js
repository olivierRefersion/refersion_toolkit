module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: "@storybook/react",
  previewHead: (head) => (`${head}
  <link href="//fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="//fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
  <link href="//fonts.googleapis.com/icon?family=Material+Icons+Two+Tone" rel="stylesheet">
  `),
  core: {
    builder: "webpack5"
  }
};