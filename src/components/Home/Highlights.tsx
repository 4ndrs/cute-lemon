import { useState, useEffect } from "react";
import { getSpecials } from "../../services/specials";

import BikeIcon from "../../assets/bike.svg";

import "./Highlights.css";

import type { Dish } from "../../types";

const Highlights = () => (
  <div className="highlights-background outer-layout">
    <section className="highlights">
      <header>
        <h1>This week's specials!</h1>
        <button>Online Menu</button>
      </header>
      <Specials />
    </section>
  </div>
);

const Specials = () => {
  const [dishes, setDishes] = useState<Dish[]>();

  useEffect(() => {
    fetchSpecials();
  }, []);

  const fetchSpecials = async () => {
    const data = await getSpecials();

    setDishes(data);
  };

  if (!dishes) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="specials">
      {dishes.map((dish) => (
        <Card key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

const Card = ({ dish }: { dish: Dish }) => (
  <article className="special-card">
    <img className="picture" src={dish.imageSrc} alt={dish.name} />

    <h3 className="title">{dish.name}</h3>
    <span className="price">$ {dish.price.toFixed(2)}</span>

    <p className="description">
      {dish.description.length > 72
        ? dish.description.slice(0, 72) + "..."
        : dish.description}
    </p>

    <div className="order-delivery">
      <strong>Order a delivery</strong>
      <img src={BikeIcon} className="bike-icon" alt="Delivery cyclist" />
    </div>
  </article>
);

export default Highlights;
