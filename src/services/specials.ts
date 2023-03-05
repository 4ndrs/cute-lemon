// simulate some kind of special fetcher api
import { sleep } from "../utils";

import Bruschetta from "../assets/bruschetta.jpg";
import GreekSalad from "../assets/greek_salad.jpg";
import LemonDessert from "../assets/lemon_dessert.jpg";

import type { Dish } from "../types";

const dishesData: Dish[] = [
  {
    id: 1,
    name: "Greek salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our" +
      " Chicago style feta cheese, garnished with crunchy garlic and " +
      "rosemary croutons.",
    imageSrc: GreekSalad,
    price: 12.99,
  },
  {
    id: 2,
    name: "Bruschetta",
    description:
      "Our bruschetta is made from grilled bread that has been smeared with " +
      "garlic and seasoned with salt and olive oil.",
    imageSrc: Bruschetta,
    price: 5.99,
  },
  {
    id: 3,
    name: "Lemon dessert",
    description:
      "This comes straight from grandma's recipe book, every last ingredient " +
      "has been sourced and is as authentic as can be imagined.",
    imageSrc: LemonDessert,
    price: 5.0,
  },
];

const getSpecials = async () => {
  await sleep(0);

  return dishesData;
};

export { getSpecials };
