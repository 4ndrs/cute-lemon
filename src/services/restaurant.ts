// Implement some kind of async api to fetch the current
// restaurant state (available seats, etc)
import { restaurantData, sleep } from "../utils";

const getAvailableTables = async (
  date: Date
): Promise<Readonly<typeof restaurantData>> => {
  // do nothing for now, and just return the current data
  date.getDate();

  await sleep(2);

  return restaurantData;
};

export { getAvailableTables };
