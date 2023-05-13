import { resolve } from "path";
import { Configuration } from "webpack"
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPaths } from "./config/build/types/config";

const paths: BuildPaths = {
    entry: resolve(__dirname, "src", "index.ts"),
    build: resolve(__dirname, "build"),
    html: resolve(__dirname, "public", "index.html"),
}

const mode = 'development'

const isDev = mode === 'development'

const config: Configuration = buildWebpackConfig({
    mode: 'development',
    paths,
    isDev,
})

export default config
