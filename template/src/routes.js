import Tabs from './pages/Tabs.vue';
import NotFoundPage from './pages/not-found.vue';

export default [
  {
    path: '/',
    component: Tabs
  },
  {
    path: '(.*)',
    component: NotFoundPage
  }
];
