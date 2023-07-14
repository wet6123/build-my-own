import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { BuildModelPage } from './pages/BuildModelPage';

const routerData = [
  {
    id: 0,
    path: '/',
    lable: 'MainPage',
    element: <MainPage />,
    withAuth: false,
  },
  {
    id: 1,
    path: '/build/model',
    lable: 'ModelSelectPage',
    element: <BuildModelPage />,
    withAuth: false,
  },
];

export const routers = createBrowserRouter(
  routerData.map(router => {
    if (router.withAuth) {
      return {
        path: router.path,
        // authCheck
        element: router.element,
      };
    }
    return {
      path: router.path,
      element: router.element,
    };
  }),
);
