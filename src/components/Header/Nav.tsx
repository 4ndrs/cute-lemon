import { mainMenu } from "../../links";
import BasketIcon from "../../assets/basket.svg";

const Nav = () => {
  return (
    <nav aria-label="primary-navigation">
      <menu>
        {mainMenu.map((link) => (
          <li key={link.name}>
            <a href={link.href}>{link.name.toUpperCase()}</a>
          </li>
        ))}
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
