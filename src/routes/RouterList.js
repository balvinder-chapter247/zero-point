import React from 'react';
import Layout from '../layout'
import { AppRoutes } from './AppRoutes';
const Home = React.lazy(() => import('../views/Home'));
const MyCourses=React.lazy(() => import('../views/MyCourses'));
const Marketplace=React.lazy(() => import('../views/Marketplace'));
const AddCourse=React.lazy(() => import('../views/AddCourse'));
const EditCourse=React.lazy(() => import('../views/EditCourse'));
const Signup=React.lazy(() => import('../views/Auth/Signup'));
const Login=React.lazy(() => import('../views/Auth/Login'));
const ForgotPassword=React.lazy(() => import('../views/Auth/ForgotPassword'));
const Dashboard=React.lazy(() => import('../views/Dashboard'));
const AddCart=React.lazy(() => import('../views/AddCard'));
const CourseLanding=React.lazy(() => import('../views/CourseLanding'));
const ContactUs=React.lazy(() => import('../views/ContactUs'));
const AboutUs=React.lazy(() => import('../views/AboutUs'));
const CourseBuilder=React.lazy(() => import('../views/CourseBuilder'));

export const restrictRoutes = [
  {
    key: 'home',
    path: AppRoutes.HOME,
    exact: true,
    name: 'home',
    component: Home,
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
    key: 'contactus',
    path: AppRoutes.CONTACTUS,
    exact: true,
    name: 'contactus',
    component: ContactUs,
    layout: Layout,
  },
  {
    key: 'aboutus',
    path: AppRoutes.ABOUTUS,
    exact: true,
    name: 'aboutus',
    component: AboutUs,
    layout: Layout,
  },
  {
    key: 'course-builder',
    path: AppRoutes.COURSE_BUILDER,
    exact: true,
    name: 'course-builder',
    component: CourseBuilder,
    layout: Layout,
  },
];

export const publicRoutes = [
  {
    key: 'signup',
    path: AppRoutes.SIGNUP,
    exact: true,
    name: 'signup',
    component: Signup,
    layout: Layout,
  },
  {
    key: 'login',
    path: AppRoutes.LOGIN,
    exact: true,
    name: 'login',
    component: Login,
    layout: Layout,
  },
  {
    key: 'forgot-password',
    path: AppRoutes.FORGOT_PASSWORD,
    exact: true,
    name: 'dashboard',
    component: ForgotPassword,
    layout: Layout,
  },
  // {
  //   key: 'course-builder',
  //   path: AppRoutes.COURSE_BUILDER,
  //   exact: true,
  //   name: 'course-builder',
  //   component: CourseBuilder,
  //   layout: Layout,
  // },
];

export const privateRoutes = [
  {
    key: 'mycourses',
    path: AppRoutes.MY_COURSES,
    exact: true,
    name: 'my-course',
    component: MyCourses,
    layout: Layout,
  },
  {
    key: 'add-course',
    path: AppRoutes.ADD_COURSE,
    exact: true,
    name: 'add-course',
    component: AddCourse,
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
    key: 'dashboard',
    path: AppRoutes.DASHBOARD,
    exact: true,
    name: 'dashboard',
    component: Dashboard,
    layout: Layout,
  },
  {
    key: 'add-cart',
    path: AppRoutes.ADD_CART,
    exact: true,
    name: 'add-cart',
    component:AddCart,
    layout: Layout,
  },
  {
    key: 'course-landing',
    path: AppRoutes.COURSE_LANDING,
    exact: true,
    name: 'course-landing',
    component: CourseLanding,
    layout: Layout,
  },
  // {
  //   key: 'course-builder',
  //   path: AppRoutes.COURSE_BUILDER,
  //   exact: true,
  //   name: 'course-builder',
  //   component: CourseBuilder,
  //   layout: Layout,
  // },
];