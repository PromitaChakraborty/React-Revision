import ReturantCard from "./ReturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [fastdelivery, setFastdelivery] = useState([]);
  const [searchText, setsearchText] = useState("");

  console.log("Body Renderd");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7138144&lng=88.50485789999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
    //     (elem) => elem.info
    //   )
    // );
    console.log(json);
    let restData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (elem) => elem.info
      );
    console.log(restData);
    setListOfRestaurant(restData);
    setFilteredRestaurants(restData);
    setFastdelivery(restData);
  };

  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          placeholder="Search Food or Restaurant"
          className="searchBox"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredRest = listOfRestaurants.filter((res) =>
              res.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurants(filteredRest);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4.5
            );
            setListOfRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredRest = filteredRestaurants.filter(
              (res) => res.costForTwo < 400
            );
            setListOfRestaurant(filteredRest);
          }}
        >
          Less then ₹400
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const restListFilt = fastdelivery.filter(
              (res) => res.sla.deliveryTime < 25 - 30
            );
            setListOfRestaurant(restListFilt);
          }}
        >
          Fast Delivery
        </button>
      </div>
      <div className="rest-container">
        {listOfRestaurants.map((restaurant) => (
          <ReturantCard key={restaurant.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
