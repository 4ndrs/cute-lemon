import { mainMenu, socials } from "../../links";
import Logo from "../../assets/logo2.png";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-background outer-layout">
      <footer className="footer">
        <img src={Logo} alt="Little Lemon logo" />

        <nav aria-labelledby="doormat-navigation">
          <h2 id="doormat-navigation">Doormat Navigation</h2>
          <menu>
            {mainMenu.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </menu>
        </nav>

        <div>
          <h2>Contact</h2>
          <div className="contact-info">
            <div>2812 S Wenworth Ave Chicago IL 60616-2648</div>
            <div>(555) 555-1234</div>
            <div>info@little-lemon.com</div>
          </div>
        </div>

        <div>
          <h2>Social Media Links</h2>
          <menu>
            {socials.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </menu>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
