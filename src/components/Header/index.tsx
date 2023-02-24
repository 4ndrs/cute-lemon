import Nav from "./Nav";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Little Lemon logo" />
      <Nav />
    </header>
  );
};

export default Header;
