import { Card } from "primereact/card";
import "../CardCollection/cardCollection.css";

export const CardCollection = (props) => {
  const { img, title, descriptions, classes } = props;
  const header = (
    <img
      alt="Card"
      src={img}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
      style={{ height: "17rem"}}
    />
  );
  return (
      <Card
        title={title}
        header={header}
        className={`${classes} m-2 text-center`}
      >
        <p className="card-descriptions" >
          {descriptions}
        </p>
      </Card>
  );
};
