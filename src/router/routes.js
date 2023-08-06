import ViewHome from '../views/ViewHome.vue';
import ViewLaunchDetails from '../views/ViewLaunchDetails.vue';

export default [
  {
    path: '/:catchAll(.*)*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'ViewHome',
    component: ViewHome,
  },
  {
    path: '/:launchId',
    name: 'ViewLaunchDetails',
    component: ViewLaunchDetails,
  },
];
