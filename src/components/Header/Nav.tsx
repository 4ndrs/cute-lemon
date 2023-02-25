import BasketIcon from "../../assets/basket.svg";

const Nav = () => {
  return (
    <nav aria-label="primary-navigation">
      <menu>
        <li>
          <a href="#TBD">HOME</a>
        </li>
        <li>
          <a href="#TBD">ABOUT</a>
        </li>
        <li>
          <a href="#TBD">MENU</a>
        </li>
        <li>
          <a href="#TBD">RESERVATIONS</a>
        </li>
        <li>
          <a href="#TBD">ORDER ONLINE</a>
        </li>
        <li>
          <a href="#TBD">LOGIN</a>
        </li>
        <li>
          <a href="#TBD">
            <img src={BasketIcon} alt="Basket icon" />
          </a>
        </li>
      </menu>
    </nav>
  );
};

export default Nav;
