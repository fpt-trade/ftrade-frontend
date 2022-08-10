import "./Myprofile.css";
import { Avatar } from "primereact/avatar";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import React, { useState } from "react";
import "./Custom.scss";
import {
  Link,
  Navigate,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import MyCollect from "./MyCollect/MyCollect";

import itemImg from "../../assets/icons/favicon.ico";
import profileImg from "../../assets/images/img-profile.PNG";
import { ProfileDetail } from "./profileDetail/profileDetail";
import { Rating } from "primereact/rating";
const MyProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [visibleSideBar, setVisibleSideBar] = useState(false);
  const [selectedAssetType, setselectedAssetType] = useState();

  const optionAssetType = [
    {
      label: "Consulting",
      value: 1,
    },
    {
      label: "Project Management",
      value: 2,
    },
    {
      label: "Mentorship",
      value: 3,
    },
  ];
  return (
    <div className="flex flex-column w-full my-profile-page">
      <div className="flex w-full profile-banner bg-gradient-color">
        <div className="flex align-items-center p-4">
          <Avatar
            image={profileImg}
            className="avata-banner"
            size="xlarge"
            shape="circle"
          />
        </div>
        <div className="flex-grow ml-5 mt-2">
          <div className="my-2">
            <span className="profile-UserName ">
              {"Tran Duc Minh (FHM.AKAT)"}
            </span>
            <div className="mt-3 font-bold">
              <span>MinhTD17</span>
              <span className="ml-7">Software Project Management</span>
            </div>
            <div className="flex mt-3">
              <Rating value={4} readOnly cancel={false} />
              <span className="ml-2">4.0</span>
              <span className="ml-2">{"(18 Feedback)"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex-none">
          <ProSidebar collapsed={visibleSideBar}>
            <Menu iconShape="square">
              <SidebarHeader>
                <MenuItem
                  onClick={() => setVisibleSideBar(!visibleSideBar)}
                  className="headerMenu-sidebar"
                  prefix={
                    !visibleSideBar && (
                      <span>
                        <img
                          src={itemImg}
                          width={50}
                          onClick={() => navigate("/")}
                          alt="home"
                        />
                      </span>
                    )
                  }
                  suffix={
                    visibleSideBar ? (
                      <i className="pi pi-angle-double-right" />
                    ) : (
                      <i className="pi pi-angle-double-left" />
                    )
                  }
                >
                  Trade
                </MenuItem>
              </SidebarHeader>
              <SidebarContent>
                <MenuItem
                  icon={<i className="pi pi-user" />}
                  className={`${
                    currentPath === "/my-profile/profile-detail" && "active"
                  }`}
                >
                  Profile <Link to="/my-profile/profile-detail" />
                </MenuItem>
                <MenuItem
                  icon={
                    <span
                      class="iconify"
                      data-icon="bi:collection"
                      data-width="20"
                      data-height="20"
                    ></span>
                  }
                  className={`${
                    currentPath === "/my-profile/my-collect" && "active"
                  }`}
                >
                  Collection <Link to="/my-profile/my-collect" />
                </MenuItem>
                <MenuItem
                  icon={
                    <span
                      class="iconify"
                      data-icon="bx:transfer"
                      data-width="20"
                      data-height="20"
                    ></span>
                  }
                  className={`${
                    currentPath === "/my-profile/my-trade" && "active"
                  }`}
                >
                  Trade <Link to="/my-profile/my-trade" />
                </MenuItem>
                <MenuItem
                  icon={<i className="pi pi-heart-fill" />}
                  className={`${
                    currentPath === "/my-profile/my-event" && "active"
                  }`}
                >
                  Event <Link to="/my-profile/my-event" />
                </MenuItem>
                <MenuItem
                  icon={<i className="pi pi-calendar" />}
                  className={`${
                    currentPath === "/my-profile/my-calendar" && "active"
                  }`}
                >
                  Calendar <Link to="/my-profile/my-calendar" />
                </MenuItem>
                <MenuItem
                  icon={
                    <span
                      class="iconify"
                      data-icon="bi:wallet"
                      data-width="20"
                      data-height="20"
                    ></span>
                  }
                  className={`${
                    currentPath === "/my-profile/my-wallet" && "active"
                  }`}
                >
                  Walled <Link to="/my-profile/my-wallet" />
                </MenuItem>
              </SidebarContent>
            </Menu>
          </ProSidebar>
        </div>
        <div className="flex-grow-1">
          <div className="flex flex-column w-full p-3">
            <div className="flex mt-5">
              <div className="flex-grow-1">
                <Routes>
                  <Route path="*" element={<Navigate to="/my-profile/profile-detail" replace />} />
                  <Route path="/my-collect" element={<MyCollect />} />
                  <Route path="/profile-detail" element={<ProfileDetail />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
