import { resolve } from "path";
import { Configuration } from "webpack";
// функции декомпозирующие вебпак конфиг
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export function buildWebpackConfig({ paths, mode }: BuildOptions): Configuration {
    return {
        // production или development
        mode,
        // путь до точки входа
        // Можно указывать несколько энтри поинтов в объекте
        // Так же можно указывать им кастомное имя
        /*     entry: {
            newName: path.resolve(__dirname, 'src', 'index.js'),
        }, */
        entry: paths.entry,
        output: {
            // шаблон имени + хеш для корректного кеширования файла
            filename: "[name].[contenthash].js",
            // путь куда собираем
            path: paths.build,
            // очищение папки с билдом
            clean: true,
        },
        plugins: buildPlugins(paths),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }
}