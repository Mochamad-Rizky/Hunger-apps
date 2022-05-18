import Home from '../views/pages/Home';
import Favorite from '../views/pages/Favorite';
import Detail from '../views/pages/Detail';

const routes = {
  '/': Home,
  '/list-restaurant': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
