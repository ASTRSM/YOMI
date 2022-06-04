import home from "../pages/home";
import level from "../pages/level";
import levelList from "../pages/level-list";

const routes = {
  '/': home, // default page
  '/level-list': levelList,
  '/level/:id': level,
};

export default routes;