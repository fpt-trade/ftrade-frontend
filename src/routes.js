import Create from "./pages/Create/Create";
import Detail from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import ListNFT from "./pages/ListNFT/ListNFT";
import Login from "./pages/Login/Login";
import MentorDetail from "./pages/MentorDetails/MentorDetail";
import Mentorship from "./pages/Mentorship/Mentorship";
import Wallet from "./pages/Wallet/Wallet";
import MyProfile from "./pages/MyProfile/MyProfile";
import MyCollect from "./pages/MyProfile/MyCollect/MyCollect";
import { ProfileDetail } from "./pages/MyProfile/profileDetail/profileDetail";
import { Navigate } from "react-router-dom";
export const routes = [
  {
    path: "/",
    element: Home,
    guard: true,
  },
  {
    path: "login",
    element: Login,
  },
  {
    path: "details",
    element: Detail,
    guard: true,
  },
  {
    path: "create",
    element: Create,
    guard: true,
  },
  {
    path: "list-nft",
    element: ListNFT,
    guard: true,
  },
  {
    path: "my-profile",
    element: MyProfile,
    guard: true,
    children: [
      {
        path:'*',
        element: <Navigate to='/profile-detail' replace/>,
      },
      {
        path: "my-collect",
        element: MyCollect,
      },
      {
        path: "profile-detail",
        element: ProfileDetail,
      },
    ],
  },
  {
    path: "/*",
    element: Home,
    guard: true,
  },
  {
    path: "/mentorship",
    element: Mentorship,
    guard: true,
  },
  {
    path: "/mentorship/mentor-details",
    element: MentorDetail,
    guard: true,
  },
  {
    path: "/mentorship/course-details",
    element: Detail,
    guard: true,
  },
  {
    path: "/wallet",
    element: Wallet,
    guard: true,
  },
];

export default routes;
