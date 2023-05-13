import { resolve } from "path";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin"
import { BuildOptions } from "./types/config";

export function buildPlugins({ html }: BuildOptions['paths']): WebpackPluginInstance[] {
    return [
        // подтягиваем html файл
        new HTMLWebpackPlugin({
            template: html,
        }),
        // показываем прогресс сборки в процентах
        new ProgressPlugin(),
    ]
}