import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
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
    {
        path: RouterPath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
];
