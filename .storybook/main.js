const fs = require('fs');

function getStories(pkg) {
  const scope = pkg ? [pkg] : fs.readdirSync('src/components');
  return scope
    .map((package) => `src/components/${package}/stories`)
    .filter((storyDir) => fs.existsSync(storyDir))
    .map((storyDir) => `../${storyDir}/*.stories.tsx`);
}

module.exports = {
  stories: getStories(),
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  }
};
