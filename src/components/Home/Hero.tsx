import RestaurantFood from "../../assets/restaurantfood.jpg";

const Hero = () => (
  <section>
    <h1>Little Lemon</h1>
    <h2>Chicago</h2>
    <p>
      We are a family owned Mediterranean restaurant, focused on traditional
      recipes served with a modern twist
    </p>
    <button>Reserve a Table</button>
    <img src={RestaurantFood} alt="Restaurant food" />
  </section>
);

export default Hero;
