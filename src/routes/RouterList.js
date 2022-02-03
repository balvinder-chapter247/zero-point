import React from 'react';
import Layout from '../layout'
import '../scss/common.css'
import { AppRoutes } from './AppRoutes';
const Home = React.lazy(() => import('../views/Home'));
const MyCourses=React.lazy(() => import('../views/MyCourses'));
const Marketplace=React.lazy(() => import('../views/Marketplace'));
const EditCourse=React.lazy(() => import('../views/EditCourse'));
const Signup=React.lazy(() => import('../views/Auth/Signup'));
// const Login=React.lazy(() => import('../views/Auth/Login'));

export const routerList = [
  {
    key: 'home',
    path: AppRoutes.HOME,
    exact: true,
    name: 'home',
    component: Home,
    layout: Layout,
  },
  {
    key: 'mycourses',
    path: AppRoutes.MY_COURSES,
    exact: true,
    name: 'my-course',
    component: MyCourses,
    layout: Layout,
  },
  {
    key: 'marketplace',
    path: AppRoutes.MARKETPLACE,
    exact: true,
    name: 'marketplace',
    component: Marketplace,
    layout: Layout,
  },
  {
    key: 'edit-course',
    path: AppRoutes.EDIT_COURSE,
    exact: true,
    name: 'edit-course',
    component: EditCourse,
    layout: Layout,
  },
  {
    key: 'signup',
    path: AppRoutes.SIGNUP,
    exact: true,
    name: 'signup',
    component: Signup,
    layout: Layout,
  },
  // {
  //   key: 'login',
  //   path: AppRoutes.LOGIN,
  //   exact: true,
  //   name: 'login',
  //   component: Login,
  //   layout: Layout,
  // },
];

