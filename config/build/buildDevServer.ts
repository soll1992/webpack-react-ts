import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer(port: BuildOptions['port']): DevServerConfiguration {
    return {
        port,
        open: true,
    }
}