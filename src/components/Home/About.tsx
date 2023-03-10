import MarioAndAdrianB from "../../assets/mario_and_adrian_b_crop.jpg";
import Restaurant from "../../assets/restaurant.jpg";

import "./About.css";

const About = () => (
  <div className="about-background outer-layout">
    <section className="about">
      <div>
        <h1 className="display-title">Little Lemon</h1>
        <h2 className="sub-title">Chicago</h2>
        <p className="lead-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
          consequat mi. Cras malesuada mi ligula, et rutrum metus dignissim ac.
          Fusce sed semper leo, eget efficitur metus. Proin eu mi volutpat,
          lobortis ipsum sit amet, dapibus elit. Proin sapien nisl, luctus non
          mauris semper, elementum lobortis quam. Fusce a finibus nisl, id
          varius tortor. Suspendisse varius lacus nec ultrices tincidunt.
          Quisque id ex tortor. Donec tempus neque faucibus velit sagittis
          aliquam.
        </p>
      </div>

      <div className="pictures">
        <img src={Restaurant} alt="Restaurant" />
        <img src={MarioAndAdrianB} alt="Mario and Adrian" />
      </div>
    </section>
  </div>
);

export default About;
