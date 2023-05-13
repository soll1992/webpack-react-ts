import { RuleSetRule } from "webpack";

export function buildLoaders(): RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    }

    return [
        // лоадеры файлов выходящих за рамки расширения js
        // порядок лоадеров имеет значение
        typescriptLoader,
    ]
}