import useRestaurantMenu from "../../utlis/useRestaurantMenu";

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);
  console.log(resId);

  if (restInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    areaName,
    sla,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
  } = restInfo?.data?.cards[2]?.card?.card?.info;

  console.log(restInfo);

  const { itemCards } =
    restInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card;

  console.log(itemCards);

  return (
    <div className="Menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(",")}</h2>
      <h2>{areaName}</h2>
      <h2>{sla.slaString}</h2>
      <h2>
        {avgRating}-{totalRatingsString}
      </h2>

      <h2>{costForTwoMessage}</h2>

      <h3>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name}-{"Rs"} {item.card.info.price / 100}
            </li>
          ))}
        </ul>
      </h3>
    </div>
  );
};

export default RestaurantsMenu;
