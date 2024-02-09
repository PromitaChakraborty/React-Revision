import { CDN_URL } from "../../utlis/contants";
const ReturantCard = (props) => {
  const { restData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    areaName,
    cuisines,
    costForTwo,
    sla,
  } = restData;
  return (
    <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="rest-logo"
        alt="rest-logo"
        src={CDN_URL + restData.cloudinaryImageId}
      />

      <h3>{name} </h3>
      <h4>{avgRating} </h4>
      <h4>{areaName}</h4>
<<<<<<< HEAD
      <h4>{cuisines.join(",")}</h4>
=======
      <h4>{cuisines}</h4>
>>>>>>> 7e51eac42bee9ab41baf762f3fdc9da728c41e49
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString} </h4>
    </div>
  );
};

export default ReturantCard;
