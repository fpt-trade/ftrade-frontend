import Create from './pages/Create/Create';
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
    path: '/create',
    element: Create
  },
  {
    path: '/*',
    element: Home
  }
];

export default routes;
