import { lazy } from "react";

// @ts-ignore
// имитация задержки для suspense, убрать потом
export const MainPageAsync = lazy(() => new Promise((resolve) => setTimeout(() => resolve(import("./MainPage")), 1500)));