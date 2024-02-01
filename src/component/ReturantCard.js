import { CDN_URL } from "../../utlis/contants";
const ReturantCard = (props) => {
  const { restData } = props;
  const {
    cloudinaryImageId,
    type,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
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
      <h4>{type} </h4>

      <h4>{cuisines.join(",")}</h4>
      <h4>₹{costForTwo} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default ReturantCard;
