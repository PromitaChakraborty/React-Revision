import React from "react";
// import ResturantCard, { withOpenLabel } from "./ResturantCard";
import ReturantCard, { withOpenLabel } from "./ReturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../../utlis/useOnline";
import Useroffline from "./Useroffline";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setsearchText] = useState("");

  const RestaurantCardOPen = withOpenLabel(ReturantCard);

  console.log("Body Renderd", listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7138144&lng=88.50485789999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    const restData =
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (elem) => elem.info
      ) ||
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (elem) => elem.info
      ) ||
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (elem) => elem.info
      ) ||
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (elem) => elem.info
      );

    console.log(restData);
    setListOfRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (elem) => elem.info
      ) ||
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
          (elem) => elem.info
        ) ||
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
          (elem) => elem.info
        ) ||
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
          (elem) => elem.info
        )
    );
  };

  const isOnline = useOnline();

  // if user is not Online then return UserOffline component
  if (!isOnline) {
    return <Useroffline />;
  }
  // if (isOnline === false)
  //   return (
  //     <h1>
  //       Looks like you're offline!! Please check your internet connection;
  //     </h1>
  //   );

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="py-2">
        <input
          type="py-2"
          placeholder="Search  Restaurant"
          className="border  border-solid border-black  px-4  rounded-lg "
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="px-4 mr-2 bg-red-500 hover:bg-red-700 font-bold   rounded-full"
          onClick={() => {
            const filteredRest = listOfRestaurants.filter((res) =>
              res.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setListOfRestaurant(filteredRest);
          }}
        >
          Search
        </button>
        <button
          className="px-4 mr-2 bg-green-500 hover:bg-green-700 font-bold   rounded-full"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4.3
            );

            setListOfRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className=" flex flex-wrap ">
        {listOfRestaurants.map((restaurant) => (
          <Link key={restaurant.id} to={"/Restaurants/" + restaurant.id}>
            {restaurant.isOpen ? (
              <RestaurantCardOPen restData={restaurant} />
            ) : (
              <ReturantCard key={restaurant.id} restData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
