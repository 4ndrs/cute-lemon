import RestaurantFood from "../../assets/restaurantfood.jpg";

import "./Hero.css";

const Hero = () => (
  <div className="hero-background outer-layout">
    <section className="hero">
      <header>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
      </header>
      <p>
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>
      <button>Reserve a Table</button>
      <img src={RestaurantFood} alt="Restaurant food" />
    </section>
  </div>
);

export default Hero;
