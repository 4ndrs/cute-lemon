import { useEffect, useRef } from "react";
import { useHamburger } from "../../context/hamburger";

import Nav from "./Nav";
import Logo from "../../assets/logo.svg";
import BasketIcon from "../../assets/basket.svg";

import "./Header.css";

const Header = () => {
  const { hamburgerOpen, toggleHamburger } = useHamburger();
  const oldScrollPosition = useRef(0);

  useEffect(() => {
    const style = document.documentElement.style;
    const sidebar = document.getElementById("main-nav");

    if (!sidebar) {
      throw new Error("Woohoo! The main-nav was not found 💢");
    }

    if (hamburgerOpen) {
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
  }, [hamburgerOpen]);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);

    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  const checkScrollPosition = () => {
    const currentScrollPosition = window.scrollY;
    const header = document.getElementById("header-background");

    if (!header) {
      throw new Error("header-background not found! 💢");
    }

    const headerIsVisible = header.getBoundingClientRect().y > -1;

    if (oldScrollPosition.current < currentScrollPosition && headerIsVisible) {
      header.style.transform = `translateY(-100%)`;
    } else if (
      oldScrollPosition.current > currentScrollPosition &&
      !headerIsVisible
    ) {
      header.style.transform = `translateY(0%)`;
    }
    oldScrollPosition.current = currentScrollPosition;
  };

  return (
    <div className="header-background outer-layout" id="header-background">
      <header className="header">
        <label className="hamburger">
          <input
            type="checkbox"
            checked={hamburgerOpen}
            onChange={() => toggleHamburger()}
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
