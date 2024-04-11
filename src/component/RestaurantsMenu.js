import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../../utlis/contants";

const RestaurantsMenu = () => {
  const [restInfo, setrestInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.805195&lng=88.3652122&restaurantId=" +
        resId
      // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.805195&lng=88.3652122&restaurantId=111584&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    console.log("XXX", data);

    const json = await data.json();

    console.log(json);
    setrestInfo(json);
  };

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
    restInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log(itemCards);

  return (
    <div className="Menu">
      {/* <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h2>{costForTwoMessage}</h2> */}

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
