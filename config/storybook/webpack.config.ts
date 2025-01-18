import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('ts', 'tsx');
    config.module?.rules?.push(buildCssLoaders(true));

    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    if (config.module && Array.isArray(config.module.rules)) {
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
            if (/svg/.test(rule?.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
    }

    return config;
};
