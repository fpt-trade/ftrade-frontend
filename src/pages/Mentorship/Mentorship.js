import React, { useState } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import itemImg from "../../assets/images/course-item.png";
import "./Mentorship.css";
import { Button } from "primereact/button";
import CardItem from "../../components/CardItem/CardItem";
const Mentorship = () => {
  const [interest, setInterest] = useState();
  const [searchMentor, setSearchMentor] = useState("");
  const [togglePersonal, setTogglePersonal] = useState(false);
  const interestSelectItems = [
    { label: "Project management", value: "1" },
    { label: "Project management", value: "2" },
    { label: "Project management", value: "3" },
    { label: "Project management", value: "4" },
    { label: "Project management", value: "5" },
  ];
  const interestItems = [
    {
      id: "0",
      img: itemImg,
      title: "Run project efficiencies",
      rating: 5,
    },
    {
      id: "1",
      img: itemImg,
      title: "Beginer to PM",
      rating: 5,
    },
    {
      id: "2",
      img: itemImg,
      title: "Introduction to Agile",
      rating: 5,
    },
    {
      id: "3",
      img: itemImg,
      title: "PM Consulting",
      rating: 5,
    },
  ];
  const mentorItems = [
    {
      id: "0",
      img: itemImg,
      name: "Lien N.",
      role: "IT BA Expert",
      rating: 5,
    },
    {
      id: "1",
      img: itemImg,
      name: "Thomas E.",
      role: "Clouds Consultant",
      rating: 5,
    },
    {
      id: "2",
      img: itemImg,
      name: "Khoa D.",
      role: "PMO Manager",
      rating: 5,
    },
    {
      id: "3",
      img: itemImg,
      name: "Hanh V.",
      role: "HRM Manager",
      rating: 5,
    },
  ];
  const personalItems = [
    {
      id: "0",
      img: itemImg,
      title: "Run project efficiencies",
      rating: 5,
    },
    {
      id: "1",
      img: itemImg,
      title: "Beginer to PM",
      rating: 5,
    },
    {
      id: "2",
      img: itemImg,
      title: "Introduction to Agile",
      rating: 5,
    },
    {
      id: "3",
      img: itemImg,
      title: "PM Consulting",
      rating: 5,
    },
  ];
  return (
    <div className="mentorship-page">
      <div class="flex justify-content-space-between mb-4">
        <div class="flex-1 mr-2 tool-box">
          <Card className="border-2 border-solid border-200 border-round-lg">
            <div className="flex align-items-center justify-content-between">
              <span className="flex-1 font-bold">Carreer interest</span>
              <span className="flex-grow-1">
                <Dropdown
                  className="select-interest"
                  value={interest}
                  options={interestSelectItems}
                  onChange={(e) => setInterest(e.value)}
                  placeholder="Select an interest"
                />
              </span>
            </div>
          </Card>
        </div>
        <div className="flex-1 ml-2 tool-box">
          <Card className="border-2 border-solid border-200 border-round-lg">
            <div className="flex align-items-center justify-content-between">
              <span className="flex-1 font-bold">Search for mentor</span>
              <span className="flex-grow-1 p-input-icon-right">
                <i className="pi pi-search" />
                <InputText
                  className="select-interest"
                  value={searchMentor}
                  placeholder="Mentor name"
                  onChange={(e) => setSearchMentor(e.target.value)}
                />
              </span>
            </div>
          </Card>
        </div>
      </div>

      <div className="flex justify-content-between">
        <div className="flex-1 px-4">
          <Card
            title="Course you might be interest"
            className="card-column  border-2 border-solid border-200 border-round-lg"
          >
            <div className="flex flex-wrap">
              {interestItems.map((item, index) => {
                if (index < 4)
                  return (
                    <CardItem
                      key={index}
                      title={item.title}
                      img={item.img}
                      rating={item.rating}
                      link={"/mentorship/course-details"}
                      containerStyle="w-6"
                      contentStyle="py-5"
                    />
                  );
                return null;
              })}
            </div>
            <div className="w-full flex justify-content-end align-content-center mt-2">
              <Button
                label="Explore more >>"
                className="p-button-text p-button-info p-button-link pb-0"
              />
            </div>
          </Card>
        </div>
        <div className="flex-1 px-4">
          <Card
            title="Recommended your mentor"
            className="card-column border-2 border-solid border-200 border-round-lg"
          >
            <div className="flex flex-wrap">
              {mentorItems.map((item, index) => {
                if (index < 4)
                  return (
                    <CardItem
                      key={index}
                      title={item.name}
                      subtitle={item.role}
                      img={item.img}
                      rating={item.rating}
                      link={"/mentorship/mentor-details"}
                      containerStyle="w-6"
                      contentStyle="py-5"
                      avatarImg
                    />
                  );
                return null;
              })}
            </div>
            <div className="w-full flex justify-content-end align-content-center mt-2">
              <Button
                label="Explore more >>"
                className="p-button-text p-button-info p-button-link pb-0"
              />
            </div>
          </Card>
        </div>
        <div className="flex-1 px-4">
          <Card
            title="Your Spaces"
            className="card-column border-2 border-solid border-200 border-round-lg"
          >
            <div className="flex flex-wrap justify-content-center">
              {personalItems.map((item, index) => {
                if (index < 2)
                  return (
                    <CardItem
                      key={index}
                      title={item.title}
                      img={item.img}
                      link={"/mentorship/mentor-details"}
                      containerStyle="w-5 m-2"
                      contentStyle="py-3"
                    />
                  );
                return null;
              })}
            </div>
            <Button
              icon={togglePersonal ? "pi pi-angle-up" : "pi pi-angle-down"}
              className="p-button-rounded p-button-text w-full p-button-lg p-0"
              onClick={() => setTogglePersonal(!togglePersonal)}
            />
            {togglePersonal && (
              <div className="flex flex-wrap justify-content-center">
                {personalItems.map((item, index) => {
                  if (index > 1)
                    return (
                      <CardItem
                        key={index}
                        title={item.title}
                        img={item.img}
                        link={"/mentorship/mentor-details"}
                        containerStyle="w-5 m-2"
                        contentStyle="py-3"
                      />
                    );
                  return null;
                })}
              </div>
            )}
          </Card>
          <Card
            title="Create your own course"
            className="card-column content-button mt-3 border-2 border-solid border-200 border-round-lg flex justify-content-center"
          >
            <span className="circle-button">
              <i className="pi pi-plus main-icon"></i>
            </span>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Mentorship;
