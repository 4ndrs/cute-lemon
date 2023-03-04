import { Link } from "react-router-dom";
import { mainMenu } from "../../links";

import useCloseSidebar from "../../hooks/useCloseSidebar";

import "./Nav.css";

const Nav = () => {
  const handleClick = useCloseSidebar();

  return (
    <nav aria-label="primary-navigation" className="main-nav" id="main-nav">
      <menu className="menu lead-text">
        {mainMenu.map((link) => (
          <li key={link.name}>
            <Link to={link.href} onClick={handleClick}>
              {link.name.toUpperCase()}
            </Link>
          </li>
        ))}
      </menu>
    </nav>
  );
};

export default Nav;
