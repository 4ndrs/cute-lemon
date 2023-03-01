import { mainMenu } from "../../links";

import "./Nav.css";

const Nav = () => {
  return (
    <nav aria-label="primary-navigation" className="main-nav">
      <menu className="menu">
        {mainMenu.map((link) => (
          <li key={link.name}>
            <a href={link.href}>{link.name.toUpperCase()}</a>
          </li>
        ))}
      </menu>
    </nav>
  );
};

export default Nav;
