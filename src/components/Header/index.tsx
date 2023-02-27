import Nav from "./Nav";
import Logo from "../../assets/logo.svg";
import BasketIcon from "../../assets/basket.svg";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Little Lemon logo" />
      <Nav />
      <a href="#TBD">
        <img src={BasketIcon} alt="Basket icon" />
      </a>
    </header>
  );
};

export default Header;
