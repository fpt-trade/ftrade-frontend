import { Avatar } from "primereact/avatar";
import { Rating } from "primereact/rating";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardItem.css";

const CardItem = (props) => {
  const { img, title, subtitle, rating, link, classes, avatarImg, simple } =
    props;
  const navigate = useNavigate();
  if (simple)
    return (
      <div className="card-item flex border-2 border-solid border-200 border-round-lg p-5 bg-white align-items-center justify-content-between">
        <img className="w-4" src={img} alt="course" />
        <div className="flex flex-column align-items-center">
          <div
            onClick={() => navigate(link)}
            className="font-semibold text-md name-link"
          >
            {title}
          </div>
          <Rating className="mt-3" value={rating} cancel={false} readOnly />
        </div>
      </div>
    );
  return (
    <div
      className={`flex border-2 border-solid border-200 border-round-lg bg-white card-item ${classes}`}
    >
      <div className="w-full">
        <div className="flex justify-content-center">
          {avatarImg ? (
            <Avatar image={img} className="w-4" size="xlarge" shape="circle" />
          ) : (
            <img className="w-4" src={img} alt="img" />
          )}
        </div>
        <div className="flex flex-column align-items-center">
          <div
            onClick={() => navigate(link)}
            className={`overflow-hidden text-overflow-ellipsis font-semibold text-lg text-center px-2 name-link ${
              !subtitle ? "h-3rem my-3" : "mt-3"
            }`}
          >
            {title}
          </div>
          {subtitle && (
            <div className="overflow-hidden text-overflow-ellipsis font-semibold text-lg mb-3 text-center px-2">
              {subtitle}
            </div>
          )}
          {rating && <Rating value={rating} cancel={false} readOnly />}
        </div>
      </div>
    </div>
  );
};
export default CardItem;
