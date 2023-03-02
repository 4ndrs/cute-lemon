import RestaurantFood from "../../assets/restaurantfood.jpg";

import "./Hero.css";

const Hero = () => (
  <div className="hero-background outer-layout">
    <section className="hero">
      <header>
        <h1 className="display-title">Little Lemon</h1>
        <h2 className="sub-title">Chicago</h2>
      </header>
      <p className="lead-text">
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>
      <button className="lemon-button">Reserve a Table</button>
      <img src={RestaurantFood} alt="Restaurant food" />
    </section>
  </div>
);

export default Hero;
