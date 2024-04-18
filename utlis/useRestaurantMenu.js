import { useEffect } from "react";
import React, { useState } from "react";
import { MENU_API } from "./contants";

const useRestaurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.805195&lng=88.3652122&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log("restmenu-json", json.data);

    setRestInfo(json.data);

    console.log("restinfo_usemenu", restInfo);
  };
  return restInfo;
};

export default useRestaurantMenu;
