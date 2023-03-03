import { useEffect, useState } from "react";

import Nav from "./Nav";
import Logo from "../../assets/logo.svg";
import BasketIcon from "../../assets/basket.svg";

import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const style = document.documentElement.style;
    const sidebar = document.getElementById("main-nav");

    if (!sidebar) {
      throw new Error("Woohoo! The main-nav was not found 💢");
    }

    if (menuOpen) {
      style.setProperty("--hamburger-top-bar-degrees", "45deg");
      style.setProperty("--hamburger-bottom-bar-degrees", "-45deg");
      style.setProperty("--hamburger-bars-width", "31px");

      sidebar.style.left = "-1rem";
    } else {
      style.setProperty("--hamburger-top-bar-degrees", "0");
      style.setProperty("--hamburger-bottom-bar-degrees", "0");
      style.setProperty("--hamburger-bars-width", "35px");

      sidebar.style.left = "calc(var(--sidenav-width) * -1.2)";
    }
  }, [menuOpen]);

  return (
    <div className="header-background outer-layout">
      <header className="header">
        <label className="hamburger">
          <input
            type="checkbox"
            checked={menuOpen}
            onChange={() => setMenuOpen((previous) => !previous)}
          />
        </label>
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
