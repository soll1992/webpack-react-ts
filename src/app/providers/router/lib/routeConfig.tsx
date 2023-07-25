import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: RouteProps[] = [
    {
        path: RouterPath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    {
        path: RouterPath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
];
