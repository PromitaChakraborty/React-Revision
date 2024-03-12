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

      <h2>{name} </h2>
      <h5>{cuisines.join(",")}</h5>

      <h3>{areaName}</h3>
      <span className="span">
        <h4>{avgRating}</h4>

        <h4>{costForTwo}</h4>

        <h4>{sla.slaString} </h4>
      </span>
    </div>
  );
};

export default ReturantCard;
