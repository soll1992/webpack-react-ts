import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin"
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins({ html }: BuildOptions['paths']): WebpackPluginInstance[] {
    return [
        // подтягиваем html файл
        new HTMLWebpackPlugin({
            template: html,
        }),
        // показываем прогресс сборки в процентах
        new ProgressPlugin(),
        // создание отдельного css файла для каждого js при билде
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })
    ]
}