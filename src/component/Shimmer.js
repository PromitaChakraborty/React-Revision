// const Shimmer = () => {
//   return (
//     <div className="Shimmer-Container">
//       <span className="span-container">
//         <div className=" shimmer-container "></div>
//         <div className=" shimmer-card "> </div>
//         <div className=" shimmer-title"> </div>
//         <div className=" shimmer-tags"></div>
//         <div className=" shimmer-details"> </div>
//       </span>
//       <div className=" Shimmer-Cards"> </div>
//       <div className=" Shimmer-Cards"></div>
//       <div className=" Shimmer-Cards"> </div>
//       <div className=" Shimmer-Cards"> </div>
//       <div className=" Shimmer-Cards"> </div>
//       <div className=" Shimmer-Cards"> </div>
//     </div>
//   );
// };

// Define shimmer_card_unit
const shimmer_card_unit = 12; // This value represents the number of shimmer cards to render

// Define CardShimmer component
const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate "></div>
      <div className="shimmer-details stroke animate "></div>
    </div>
  );
};

// Define Shimmer component
const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {new Array(shimmer_card_unit).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};

export default Shimmer;
