import path from "path";
// плагины
import webpack from "webpack"
import HTMLWebpackPlugin from "html-webpack-plugin"

const config: webpack.Configuration = {
    mode: "development",
    // путь до точки входа
    // Можно указывать несколько энтри поинтов в объекте
    // Так же можно указывать им кастомное имя
    /*     entry: {
        newName: path.resolve(__dirname, 'src', 'index.js'),
    }, */
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
        // шаблон имени + хеш для корректного кеширования файла
        filename: "[name].[contenthash].js",
        // путь куда собираем
        path: path.resolve(__dirname, "build"),
        // очищение папки с билдом
        clean: true,
    },
    plugins: [
        // подтягиваем html файл
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        }),
        new webpack.ProgressPlugin(),
    ],
    module: {
        rules: [
            // лоадеры файлов выходящих за рамки расширения js
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        // типы файлов для которых не указываем расширения
        extensions: [".tsx", ".ts", ".js"],
    },
}

export default config
