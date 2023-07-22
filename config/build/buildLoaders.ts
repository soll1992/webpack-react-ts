import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";

export function buildLoaders(isDev: boolean): RuleSetRule[] {
    // загрузка картинок svg
    const svgLoader = {
        test: /\.svg$/i,
        use: ["@svgr/webpack"],
    };

    // лоадер для файлов стилей
    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                // настройки для css модулей
                options: {
                    // оставляем полноценное хеширование только в прод сборке для фалов с .modules.
                    // на деве делаем более читаемые класснеймы для дебага
                    modules: {
                        auto: (resPath: string) => resPath.includes(".module."),
                        localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    // если не используем тайпскрипт нужен babel-loader для jsx
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    // загрузка картинок png, jpg, jpeg, gif
    // можно добавить и шрифты
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    // Бейбл лоадер
    const babelLoader = {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ["ru", "en"],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    return [
        // лоадеры файлов выходящих за рамки расширения js
        // порядок лоадеров имеет значение
        fileLoader,
        svgLoader,
        // бейбл лоадер должен быть добавлен до тс лоадера
        babelLoader,
        typescriptLoader,
        cssLoaders,
    ];
}
