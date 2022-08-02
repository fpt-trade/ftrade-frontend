import Create from './pages/Create/Create';
import Detail from './pages/Details/Details';
import Home from './pages/Home/Home';
import ListNFT from './pages/ListNFT/ListNFT';
import Login from './pages/Login/Login';

export const routes = [
  {
    path: '/',
    element: Home
  },
  {
    path: '/login',
    element: Login
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
    path: '/list-nft',
    element: ListNFT
  },
  {
    path: '/*',
    element: Home
  }
];

export default routes;
