import { LOGO_URL } from "../../utlis/contants";
import { useState } from "react";
const Header = () => {
  const [btnlogin, setbtnlogin] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="Website-Image" src={LOGO_URL} />
      </div>

      <div className="nav-container">
        <ul>
          <li className="li1">HOME</li>
          <li className="li2">ABOUT US</li>
          <li className="li3">CONTACT</li>
          <li className="li4">CART</li>
          <button
            className="login-btn"
            onClick={() => {
              btnlogin === "login"
                ? setbtnlogin("logout")
                : setbtnlogin("login");
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
