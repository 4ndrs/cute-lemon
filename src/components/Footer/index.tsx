import Logo from "../../assets/logo2.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Little Lemon logo" />

      <nav aria-labelledby="doormat-navigation">
        <h2 id="doormat-navigation">Doormat Navigation</h2>
        <menu>
          <li>
            <a href="#TBD">Home</a>
          </li>
          <li>
            <a href="#TBD">About</a>
          </li>
          <li>
            <a href="#TBD">Menu</a>
          </li>
          <li>
            <a href="#TBD">Reservations</a>
          </li>
          <li>
            <a href="#TBD">Order Online</a>
          </li>
          <li>
            <a href="#TBD">Login</a>
          </li>
        </menu>
      </nav>

      <div>
        <h2>Contact</h2>
        <div>2812 S Wenworth Ave Chicago IL 60616-2648</div>
        <div>(555) 555-1234</div>
        <div>info@little-lemon.com</div>
      </div>

      <div>
        <h2>Social Media Links</h2>
        <menu>
          <li>
            <a href="#TBD">Twitter</a>
          </li>
          <li>
            <a href="#TBD">Instagram</a>
          </li>
          <li>
            <a href="#TBD">Facebook</a>
          </li>
        </menu>
      </div>
    </footer>
  );
};

export default Footer;
