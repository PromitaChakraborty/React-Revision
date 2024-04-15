import { LOGO_URL } from "../../utlis/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utlis/useOnline";
const Header = () => {
  const [btnlogin, setbtnlogin] = useState("Login");
  const isOnline = useOnline();

  console.log("abc", isOnline);
  return (
    <div className="flex justify-between py-4  bg-slate-400 ">
      <div className="logo text-2xl font-bold shadow-lg">
        <img className="w-24" alt="Website-Image" src={LOGO_URL} />
      </div>

      <div className="flex items-center  ">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-serif font-bold ">
            Online Status:{isOnline ? " Online:✅" : " Offline:🔴"}
          </li>

          <li className="px-2 font-bold hover:text-blue-500 transition duration-300 ">
            <Link to="/">HOME </Link>
          </li>
          <li className="px-2 font-bold hover:text-blue-500 transition duration-300">
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className="px-2 font-bold hover:text-blue-500 transition duration-300">
            <Link to="/contact">CONTACT US </Link>
          </li>
          <li className="px-2 font-bold hover:text-blue-500 transition duration-300">
            <Link to="/grocery">GROCERY </Link>
          </li>

          <button
            className="bg-blue-500 hover:bg-blue-700 font-bold py-3 px-4 rounded-full transition duration-300 "
            onClick={() => {
              btnlogin === "Login"
                ? setbtnlogin("Logout")
                : setbtnlogin("Login");
            }}
          >
            {btnlogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
