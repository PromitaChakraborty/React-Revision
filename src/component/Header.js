import { LOGO_URL } from "../../utlis/contants";
const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
