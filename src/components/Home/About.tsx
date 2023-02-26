import MarioAndAdrianB from "../../assets/mario_and_adrian_b.jpg";
import Restaurant from "../../assets/restaurant.jpg";

const About = () => (
  <section>
    <h1>Little Lemon</h1>
    <h2>Chicago</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in consequat
      mi. Cras malesuada mi ligula, et rutrum metus dignissim ac. Fusce sed
      semper leo, eget efficitur metus. Proin eu mi volutpat, lobortis ipsum sit
      amet, dapibus elit. Proin sapien nisl, luctus non mauris semper, elementum
      lobortis quam. Fusce a finibus nisl, id varius tortor. Suspendisse varius
      lacus nec ultrices tincidunt. Quisque id ex tortor. Donec tempus neque
      faucibus velit sagittis aliquam.
    </p>

    <img src={MarioAndAdrianB} alt="Mario and Adrian" />
    <img src={Restaurant} alt="Restaurant" />
  </section>
);

export default About;
