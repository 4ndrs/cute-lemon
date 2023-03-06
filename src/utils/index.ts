import restaurantData from "./restaurant";
import cachedRandom from "./cachedRandom";

const sleep = (seconds: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, seconds * 1000));

export { sleep, restaurantData, cachedRandom };
