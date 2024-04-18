import useRestaurantMenu from "../../utlis/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  // console.log("resID", resId);

  if (restInfo === null) return <Shimmer />;
  // console.log("restInfoIF", restInfo);

  const {
    name,
    cuisines = [],
    areaName,
    sla = {},

    avgRating,
    totalRatingsString,
    costForTwoMessage,
  } = restInfo?.cards[2]?.card?.card?.info || {};

  // console.log("name", restInfo?.data?.cards[2]?.card?.card?.info.name);

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
    <div className="text-center ">
      <h1 className="text-3xl">{name}</h1>
      <div className="">
        <h2 className="mr-1">Ratings:{avgRating}</h2>
        <h2 className="">{totalRatingsString}</h2>
        <h2 className="ml-2">{costForTwoMessage}</h2>
      </div>
      <p>{cuisines.join(",")}</p>
      <h2>{areaName}</h2>
      <h2>{sla.deliveryTime} Mins</h2>
      {Category.map((Category, index) => (
        <RestaurantCategory
          key={Category?.card?.card.title}
          data={Category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index === showIndex ? -1 : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantsMenu;
