import Home from "./pages/Home/Home";

export const routes = [
  {
    path: "/",
    element: Home
  },
  {
    path: "/*",
    element: Home
  }
];

export default routes;
