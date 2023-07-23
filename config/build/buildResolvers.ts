import { ResolveOptions } from 'webpack';
import { BuildPaths } from './types/config';

export function buildResolvers(paths: BuildPaths): ResolveOptions {
    return {
        // типы файлов для которых не указываем расширения
        extensions: ['.tsx', '.ts', '.js'],
        // приоритет для абсолютных путей
        preferAbsolute: true,
        modules: [paths.src, 'node_modules'],
        // главный файл для модуля
        mainFiles: ['index'],
    };
}
