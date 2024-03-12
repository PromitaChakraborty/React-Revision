import { ERROR_URL } from "../../utlis/contants";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-page">
      <img className="Error" alt="Error-Image" src={ERROR_URL} />

      <h1>
        {err.status}:{err.statusText}
      </h1>
      <h2>Oops! The restaurant you're looking for can't be found.</h2>
      <h3 className="error-data">{err.data}</h3>
    </div>
  );
};

export default Error;
