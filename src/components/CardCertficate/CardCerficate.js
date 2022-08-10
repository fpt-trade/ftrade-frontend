
export const CardCertificate = (props) => {
  const { img, descriptions, classes } = props;
  return (
    <div
      className={`${classes} bg-white`}
      style={{ width: "10em" }}
    >
      <img
        alt="Card"
        src={img}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        style={{ height: "9rem",width: "100%" }}
      />
      <p className="m-0" style={{ lineHeight: "1.5", textAlign: "center" }}>
        {descriptions}
      </p>
    </div>
  );
};
