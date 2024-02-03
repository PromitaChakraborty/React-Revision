import ReturantCard from "./ReturantCard";
import { useState, useEffect } from "react";
import restList from "../../utlis/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(restList);
  const [listOfRestaurants2, setListOfRestaurant2] = useState(restList);
  const [listOfRestaurants3, setListOfRestaurant3] = useState(restList);
  const [listOfRestaurants4, setListOfRestaurant4] = useState(restList);
  const [listOfRestaurants5, setListOfRestaurant5] = useState(restList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999"
    );
    console.log(data);
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json?.data?.sucess?.cards[4]?.grideWidth?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setListOfRestaurant2(
      json?.data?.sucess?.cards[4]?.grideWidth?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setListOfRestaurant3(
      json?.data?.sucess?.cards[4]?.grideWidth?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setListOfRestaurant4(
      json?.data?.sucess?.cards[4]?.grideWidth?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setListOfRestaurant5(
      json?.data?.sucess?.cards[4]?.grideWidth?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const restaurantListFiltered = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setListOfRestaurant(restaurantListFiltered);
          }}
        >
          Rating 4.0+
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            const restListFiltered = listOfRestaurants2.filter(
              (res) => res.costForTwo < 400
            );
            setListOfRestaurant(restListFiltered);
          }}
        >
          Less then ₹400
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const restListFilt = listOfRestaurants3.filter(
              (res) => res.deliveryTime < 30
            );
            setListOfRestaurant(restListFilt);
          }}
        >
          Fast Delivery
        </button>
        <button
          className="filter-btn-nonveg"
          onClick={() => {
            const restLisFilt = listOfRestaurants4.filter(
              (res) => res.Id < 2000
            );
            setListOfRestaurant(restLisFilt);
          }}
        >
          Non-Veg
        </button>
        <button
          className="filter-btn-veg"
          onClick={() => {
            const filtered = listOfRestaurants5.filter((res) => res.Id > 2000);
            setListOfRestaurant(filtered);
          }}
        >
          Veg
        </button>
      </div>
      <div className="rest-container">
        {listOfRestaurants.map((restaurant) => (
          <ReturantCard key={restaurant.Id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
