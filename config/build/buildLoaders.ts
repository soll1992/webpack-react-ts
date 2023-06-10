import { RuleSetRule } from "webpack";

export function buildLoaders(): RuleSetRule[] {
    // лоадер для файлов стилей
    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
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

    return [
        // лоадеры файлов выходящих за рамки расширения js
        // порядок лоадеров имеет значение
        typescriptLoader,
        cssLoaders,
    ];
}
