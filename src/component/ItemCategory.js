import { CDN_URL } from "../../utlis/contants";

const ItemCategory = ({ item }) => {
  console.log("ItemCategory", item);
  return (
    <div>
      {item.map((item) => (
        <div
          key={item.card.info.id}
          className="border border-gray-200 rounded-lg p-4 mb-4 flex items-center relative"
        >
          <img
            src={CDN_URL + item.card.info.imageId}
            alt={item.card.info.name}
            className="w-24 h-24 rounded-md mr-4 shadow-lg"
          />
          <div>
            <h1 className="font-bold text-lg mb-1">{item.card.info.name}</h1>
            <h2 className="text-gray-600">
              Rs
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              {item.card.info.description}
            </p>
            <button className="bg-red-600 text-white py-2 px-4 rounded-md shadow-md">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCategory;
