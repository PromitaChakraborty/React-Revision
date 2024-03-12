import { LOGO_URL } from "../../utlis/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnlogin, setbtnlogin] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="Website-Image" src={LOGO_URL} />
      </div>

      <div className="nav-container">
        <ul>
          <li>
            <Link to="/">HOME </Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US </Link>
          </li>
          <li>CART</li>
          <button
            className="login-btn"
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
