import React from "react";
import { Button } from "primereact/button";
import mentorship from "../../assets/images/mentorship.png";
import personalBrand from "../../assets/images/personal-brand.png";
import itemsTrade from "../../assets/images/items-trade.png";
import events from "../../assets/images/events.png";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const items = [
    {
      title: "Mentorship",
      img: mentorship,
      url: "/mentorship",
    },
    {
      title: "Personal Brand",
      img: personalBrand,
      url: "",
    },
    {
      title: "Items Trade",
      img: itemsTrade,
      url: "",
    },
    {
      title: "Events",
      img: events,
      url: "",
    },
  ];

  return (
    <div className="flex flex-column w-full h-full">
      <div className="flex  justify-content-center">
        {items.map((item) => (
          <div
            key={item.title}
            className="w-3 flex-column home-item-wrapper border-2 border-solid border-200 py-4 px-5 border-round-lg m-3 bg-white cursor-pointer"
            onClick={() => navigate(item.url)}
          >
            <div className="text-left text-xl font-bold mb-auto">
              {item.title}
              <div className="title" />
            </div>
            <div className="">
              <img
                src={item.img}
                alt={item.title}
                className="h-15rem w-full border-round-lg"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-auto">
        <p className="w-6 mx-auto">
          F-Trade's about providing a shared community experience. We're
          passionate about giving everyone the opportunity to learn and share in
          the most personalized and authentic way possible.
        </p>
      </div>
    </div>
  );
};

export default Home;
