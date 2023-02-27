import { mainMenu } from "../../links";

const Nav = () => {
  return (
    <nav aria-label="primary-navigation">
      <menu>
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
