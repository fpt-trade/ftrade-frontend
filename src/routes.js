import Detail from './pages/Details/Details';
import Home from './pages/Home/Home';

export const routes = [
  {
    path: '/',
    element: Home
  },
  {
    path: '/details',
    element: Detail
  },
  {
    path: '/*',
    element: Home
  }
];

export default routes;
