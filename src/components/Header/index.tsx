import Nav from "./Nav";
import Logo from "../../assets/logo.svg";
import BasketIcon from "../../assets/basket.svg";

import "./Header.css";

const Header = () => {
  return (
    <div className="header-background">
      <header className="header">
        <input type="checkbox" className="hamburger" />
        <img src={Logo} alt="Little Lemon logo" className="logo" />
        <Nav />
        <a href="#TBD">
          <img src={BasketIcon} alt="Basket icon" className="basket-icon" />
        </a>
      </header>
    </div>
  );
};

export default Header;
