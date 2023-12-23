import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.sataware.com/wp-content/uploads/2020/07/food-delivery-app-logo.png"
        />
      </div>
      <div className="nav-container">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CONTACT</li>
          <li>CART</li>
        </ul>
      </div>
    </div>
  );
};

const ReturantCard = (props) => {
  const { restData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = restData;
  return (
    <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="rest-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          restData.cloudinaryImageId
        }
      />

      <h3>{name} </h3>
      <h4>{avgRating} </h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const restList = [
  {
    name: "KFC",
    Id: 1692,
    avgRating: "4.3",
    deliveryTime: 36,
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast-Food"],
    costForTwo: 40000,
    cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
  },
  {
    name: "Burger King",
    Id: 1492,
    avgRating: "4.2",
    deliveryTime: 33,
    cuisines: ["Burgers", "American"],
    costForTwo: 20000,
    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  },
  {
    name: "Baisakhi Restaurant",
    Id: 1042,
    avgRating: "4.2",
    deliveryTime: 36,
    cuisines: ["Bengali", "Tandoor", "Indian", "Chinese"],
    costForTwo: 60000,
    cloudinaryImageId: "cipvqmt3xzz28xavfbxy",
  },
  {
    name: "WOW! Momo",
    Id: 1052,
    avgRating: "4.4",
    deliveryTime: 36,
    cuisines: ["Tibetan,Healthy Food,Asian"],
    costForTwo: 40000,
    cloudinaryImageId: "0984acc0ed7b914206dbbcb90297becc",
  },
  {
    name: "Wow! China",
    Id: 1062,
    avgRating: "4.2",
    deliveryTime: 27,
    cuisines: ["Tibetan", "Asian", "American"],
    costForTwo: 40000,
    cloudinaryImageId: "7d46fc6e6aeda7e135d17342a6c61eb8",
  },
  {
    name: "Monginis",
    Id: 1072,
    avgRating: "4.2",
    deliveryTime: 27,
    cuisines: ["Bakery,Desserts,Snacks"],
    costForTwo: 40000,
    cloudinaryImageId: "b2b1dca49b700afedab06650f6c3b06d",
  },
  {
    name: "Kwality Wall's",
    Id: 1082,
    avgRating: "4.2",
    deliveryTime: 27,
    cuisines: ["Dessert", "Ice Cream", "Ice Cream Cake"],
    costForTwo: 40000,
    cloudinaryImageId: "uoukmnppgxx1g69zwxo2",
  },
  {
    name: "Mama Mia!",
    Id: 1092,
    avgRating: "4.7",
    deliveryTime: 30,
    cuisines: ["Ice Cream", "Desserts", "Bakery"],
    costForTwo: 40000,
    cloudinaryImageId: "d8e344ea3ab914c9a04fba6bbc0cd623",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        {restList.map((restaurant) => (
          <ReturantCard key={restaurant.Id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
