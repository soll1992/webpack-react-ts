import {
    ProgressPlugin, WebpackPluginInstance, DefinePlugin, HotModuleReplacementPlugin,
} from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins(
    { html }: BuildOptions['paths'],
    isDev: boolean,
): WebpackPluginInstance[] {
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
        }),
        // плагин для прокидывания переменных из вебпак конфига
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        // плагины для Hot Module Replacement
        new ReactRefreshWebpackPlugin(),
        new HotModuleReplacementPlugin(),
        // плагин для анализа размера бандла
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }),
    ];
}
