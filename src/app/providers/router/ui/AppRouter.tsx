import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'app/providers/router/lib/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

export const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {routeConfig.map(({ element, path }) => (
                <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />
            ))}
        </Routes>
    </Suspense>
);
