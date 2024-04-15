import useRestaurantMenu from "../../utlis/useRestaurantMenu";

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);
  console.log("resID", resId);

  if (restInfo === null) return <Shimmer />;
  console.log("restInfoIF", restInfo);

  const {
    name,
    cuisines = [],
    areaName,
    sla = {},
    avgRating,
    totalRatingsString,
    costForTwoMessage,
  } = restInfo?.data?.cards[2]?.card?.card?.info || {};

  console.log("restinfoCONST", restInfo);

  const { itemCards } =
    restInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card || {};

  console.log(
    "Itemcard CONST",
    restInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const Category =
    restInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("Category", Category);
  return (
    <div className=" ">
      <h1 className="">MENU</h1>

      <h3>
        <ul className=" ">
          {itemCards &&
            itemCards.map((item) => (
              <li key={item.card.info.id || {}}>
                {item.card.info.name || {}}
                ---------------------------------------------------------------------------
                {"Rs"} {item.card.info.price / 100}
              </li>
            ))}
        </ul>
      </h3>
    </div>
  );
};

export default RestaurantsMenu;
