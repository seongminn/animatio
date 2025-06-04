import path, { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, 'package.json')));
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [],
    core: { builder: '@storybook/builder-vite' },
    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {},
    },

    viteFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '~': path.resolve(__dirname, '../src'),
        };

        return config;
    },
};
export default config;
