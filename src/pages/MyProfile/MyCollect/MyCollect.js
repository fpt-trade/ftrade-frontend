import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import itemImg from "../../../assets/images/course-item.png";
import coffeewithMinhTd from "../../../assets/images/CoffeewithMindTd.png";
import dinnerwithMinhTd from "../../../assets/images/DinnerwithMindTd.png";
import coffetalkwithMinhTd from "../../../assets/images/CoffeetalkwithMinhTd.png";
import supportAppointment from "../../../assets/images/SupportAppointment.png";
import cinemawithMinhTd from "../../../assets/images/CinemawithMinhTd.png";
import { CardCollection } from "../../../components/CardCollection/cardCollection";
import CardItem from "../../../components/CardItem/CardItem";
import "../Myprofile.css";

export const MyCollect = () => {
  const navigate = useNavigate();
  const interestItems = [
    {
      id: "0",
      img: coffeewithMinhTd,
      title: "One-One Coffee with MinhTd17",
      descriptions: "200 Gold",
      rating: 5,
    },
    {
      id: "1",
      img: dinnerwithMinhTd,
      title: "Dinner with MinhTd17",
      descriptions: "Bidding",
      rating: 5,
    },
    {
      id: "2",
      img: coffetalkwithMinhTd,
      title: "Coffee Talk with MinhTd17",
      descriptions: "200 Gold",
      rating: 5,
    },
    {
      id: "3",
      img: supportAppointment,
      title: "Support Appointment with MinhTd17",
      descriptions: "1000 Gold",
      rating: 5,
    },
    {
      id: "4",
      img: cinemawithMinhTd,
      title: "Cinema with MinhTd17",
      descriptions: "Free",
      rating: 1,
    },
  ];
  return (
    <div className="flex flex-column profile-detail my-collection">
      <div className="w-full">
        <div>
          <div className="font-bold text-lg flex align-items-center">
            <span>My Created</span>
            <Button
              label={
                <span>
                  Create NFT <i className="pi pi-plus" />
                </span>
              }
              onClick={() =>navigate("/create")}
              className="p-button-outlined btn-sort bg-gradient-color ml-3 "
            />{" "}
          </div>
          <div className="underline-title" />

          <div className="my-3 w-full flex flex-wrap mr-3 card-Collection">
            {interestItems.map((item, index) => (
              <CardCollection
                img={item.img}
                title={item.title}
                classes="w-2 mr-5"
                descriptions={item.descriptions}
              />
            ))}
          </div>
          <div className="font-bold text-lg m-2">
            My Collection <div className="underline-title" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCollect;
