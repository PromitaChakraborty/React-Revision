import ItemCategory from "./ItemCategory";

const RestaurantCategory = ({ data, setShowIndex, showItems }) => {
  // console.log("RestaurantCategory", data);
  //UnControlled Component
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="   bg-gray-50 mx-auto my-4 w-6/12  shadow-lg  ">
      <div
        className="flex justify-between  cursor-pointer "
        onClick={handleClick}
      >
        <span className="font-bold text-lg ">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

      {showItems && <ItemCategory item={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
