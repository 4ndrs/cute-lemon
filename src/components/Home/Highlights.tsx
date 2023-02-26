import { useState, useEffect } from "react";
import { getSpecials } from "../../services/specials";

import BikeIcon from "../../assets/bike.svg";

import type { Dish } from "../../types";

const Highlights = () => (
  <section>
    <header>
      <h1>This week's specials!</h1>
      <button>Online Menu</button>
    </header>
    <Specials />
  </section>
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
    <>
      {dishes.map((dish) => (
        <Card key={dish.id} dish={dish} />
      ))}
    </>
  );
};

const Card = ({ dish }: { dish: Dish }) => (
  <article>
    <img src={dish.imageSrc} alt={dish.name} />

    <h3>{dish.name}</h3>
    <span>$ {dish.price}</span>

    <p>{dish.description}</p>

    <strong>Order a delivery</strong>
    <img src={BikeIcon} alt="Bike" />
  </article>
);

export default Highlights;
