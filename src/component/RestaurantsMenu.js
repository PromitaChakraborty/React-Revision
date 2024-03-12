import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantsMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.805195&lng=88.3652122&restaurantId=438653&isMenuUx4=true&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
  };

  return (
    <div className="Menu">
      <h1></h1>
      <h2>
        <ul>
          <li>Biriyani</li>
          <li>Momo</li>
          <li>Burger</li>
          <li>Pizza</li>
        </ul>
      </h2>
    </div>
  );
};

export default RestaurantsMenu;
