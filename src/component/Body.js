import ReturantCard from "./ReturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setsearchText] = useState("");

  console.log("Body Renderd");

  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7138144&lng=88.50485789999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   const json = await data.json();

  //   console.log(json);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7138144&lng=88.50485789999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    const restData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (elem) => elem.info
      );

    console.log(restData);
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (elem) => elem.info
      )
    );

    //   // console.log(restData);
    // };

    // if (listOfRestaurants.length === 0) {
    //   return <Shimmer />;
    // }

    // console.log(restData);

    return listOfRestaurants?.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="filter">
          <input
            type="text"
            placeholder="Search  Restaurant"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search-button"
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
            className="filter-btn"
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
        <div className="restaurant-list">
          {listOfRestaurants.map((restaurant) => (
            <ReturantCard key={restaurant.id} restData={restaurant} />
          ))}
        </div>
      </div>
    );
  };
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          placeholder="Search  Restaurant"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="search-button"
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
          className="filter-btn"
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
      <div className="restaurant-list">
        {listOfRestaurants.map((restaurant) => (
          <Link key={restaurant.id} to={"/Restaurants/" + restaurant.id}>
            <ReturantCard key={restaurant.id} restData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
