import { lazy } from "react";

// @ts-ignore
// имитация задержки для suspense, убрать потом
export const AboutPageAsync = lazy(() => new Promise((resolve) => setTimeout(() => resolve(import("./AboutPage")), 1500)));
