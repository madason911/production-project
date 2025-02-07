import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['en', 'ru'], // Языки
                            outputPath: 'public/locales/{{locale}}/{{ns}}.json', // Путь для сохранения
                            defaultNS: 'translation', // Неймспейс по умолчанию
                            keyAsDefaultValue: true, // Использовать ключ как значение по умолчанию
                            nsSeparator: ':', // Разделитель для неймспейсов (если используется)
                            keySeparator: '.', // Разделитель для ключей
                            discardOldKeys: true, // Удалять старые ключи
                        },
                    ],
                ],
            },
        },
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoaders = buildCssLoaders(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoaders,
    ];
}
