import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(port: BuildOptions['port']): DevServerConfiguration {
    return {
        port,
        open: true,
        // фиксит проблему дев сервера, когда возвращается ошибка, если обновить страницу с роутом
        historyApiFallback: true,
        // для hot module replacement
        hot: true,
    };
}
