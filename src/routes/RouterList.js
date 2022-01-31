import React from 'react';
import Layout from '../layout';
import { AppRoutes } from './AppRoutes';
const Home = React.lazy(() => import('../views/Home'));
const MyCourses=React.lazy(() => import('../views/MyCourses'));

export const routerList = [
  {
    key: 'home',
    path: AppRoutes.HOME,
    exact: true,
    name: 'home',
    element: Home,
    layout: Layout,
  },
  {
    key: 'mycourses',
    path: AppRoutes.MY_COURSES,
    exact: true,
    name: 'my-course',
    element: MyCourses,
    layout: Layout,
  },
];

