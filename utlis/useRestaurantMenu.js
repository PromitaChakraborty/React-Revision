import { useEffect } from "react";
import React, { useState } from "react";
import { MENU_API } from "./contants";

const useRestaurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setRestInfo(json.data);
  };
  return restInfo;
};

export default useRestaurantMenu;
