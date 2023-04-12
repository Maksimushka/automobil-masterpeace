import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                {routeConfig.map(({ path, element }) => {
                    return <Route key={path} path={path} element={element} />;
                })}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
