import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
    return {
        // типы файлов для которых не указываем расширения
        extensions: [".tsx", ".ts", ".js"],
    }
}