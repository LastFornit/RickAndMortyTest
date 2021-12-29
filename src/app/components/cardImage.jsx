import React from "react";

const CardImage = ({ imageUrl, altName, classType = "simple" }) => {
  const getImgClass = () => {
    if (classType === "vertical") {
      return "card-img-top";
    }
    return " img-card rounded-start";
  };
  return (
    <div className="col-md-4 ">
      <img src={imageUrl} alt={altName} className={getImgClass()} />
    </div>
  );
};

export default CardImage;
