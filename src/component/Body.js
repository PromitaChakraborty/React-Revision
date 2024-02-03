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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7138144&lng=88.50485789999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const restData =
      json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(
        (elem) => elem.info
      );
    console.log(restData);
    setListOfRestaurant(restData);
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
