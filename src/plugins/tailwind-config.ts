import type {Plugin} from '@docusaurus/types';

const tailwindPlugin = (): Plugin<void> => {
    return {
        name: 'tailwind-plugin',
        configurePostCss(postcssOptions) {
            postcssOptions.plugins.push(require('@tailwindcss/postcss'));
            return postcssOptions;
        },
    };
};

export default tailwindPlugin;