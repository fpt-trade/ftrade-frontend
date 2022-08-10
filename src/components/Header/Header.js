import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SelectButton } from "primereact/selectbutton";
import { Button } from "primereact/button";
import fTradeLogo from "../../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedButton, setSelectedButton] = useState();
  const [selectedMentorButton, setSelectedMentorButton] = useState();

  const isMembershipRoute =
    location.pathname.includes("/mentorship") ||
    location.pathname.includes("/wallet");
  const buttons = [
    { name: "Find a mentor", value: "find a mentor" },
    { name: "Become a mentor", value: "become a mentor" },
  ];
  const mentorshipButtons = [
    { name: "Mentorship", value: "/mentorship" },
    { name: "Personal Brand", value: "brand" },
    { name: "Items", value: "items" },
    { name: "Event", value: "event" },
    { name: "Create", value: "create" },
    { name: "Wallet", value: "/wallet" },
  ];
  useEffect(() => {
    let currentPath = location.pathname;
    let findMatch = mentorshipButtons.findIndex((x) =>
      x.value.match(currentPath)
    );
    console.log(findMatch, currentPath);
    if (findMatch > -1)
      setSelectedMentorButton(mentorshipButtons[findMatch].value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  const onChangeRoute = (route) => {
    setSelectedMentorButton(route);
    navigate(route);
  };
  return (
    <div className="main-background border-round-lg py-3 px-4 flex align-items-center">
      <img
        className="logo cursor-pointer"
        src={fTradeLogo}
        alt="f-trade logo"
        onClick={() => navigate("/")}
      />
      <div className="flex ml-auto align-items-center">
        {isMembershipRoute ? (
          <SelectButton
            value={selectedMentorButton}
            options={mentorshipButtons}
            optionLabel="name"
            onChange={(e) => onChangeRoute(e.value)}
          />
        ) : (
          <>
            <Button
              label="Create"
              className="p-button-warning mr-3"
              onClick={() => navigate("/create")}
            />
            <SelectButton
              className="header-button"
              value={selectedButton}
              options={buttons}
              optionLabel="name"
              onChange={(e) => setSelectedButton(e.value)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
