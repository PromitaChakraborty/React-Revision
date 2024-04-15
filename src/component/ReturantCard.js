import { CDN_URL } from "../../utlis/contants";

const ReturantCard = (props) => {
  const { restData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,

    cuisines,
    costForTwo,
    sla,
  } = restData;
  return (
    <div className="w-[200px]  h-[460px] mx-2 my-2   bg-white shadow-lg rounded-lg overflow-hidden  transform hover:scale-105 shadow-xxl transition duration-300 ">
      <img
        className="rest-logo rounded-lg mb-3"
        alt="rest-logo"
        src={CDN_URL + restData.cloudinaryImageId}
      />
      <div className="font-bold">
        <h2 className="font-bold text-xl mb-2">{name} </h2>
        <h5 className="text-gray-700 text-base mb-3">{cuisines.join(",")}</h5>
        <span className="flex justify-between">
          <h4 className=" bg-orange-600 rounded-md p-2 mb-3">{avgRating}</h4>

          <h4>{costForTwo}</h4>
        </span>

        <h4 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-center ml-12">
          {sla.slaString}{" "}
        </h4>
      </div>
    </div>
  );
};

export const withOpenLabel = (ReturantCard) => {
  return (props) => {
    return (
      <div className="">
        <label className=" bg-red-500 text-white m-2 p-2 ">Open</label>
        <ReturantCard {...props} />
      </div>
    );
  };
};

export default ReturantCard;
