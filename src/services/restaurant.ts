// Implement some kind of async api to fetch the current
// restaurant state (available seats, etc)
import { cachedRandom, restaurantData, sleep } from "../utils";

const getAvailableTables = async (
  date: Date
): Promise<Readonly<typeof restaurantData>> => {
  const data = generateRandomData(date.getDate());

  await sleep(0.5);

  return data;
};

const generateRandomData = (seed: number) => {
  const data = Object.entries(restaurantData).reduce(
    (newRestaurant, [areaKey, areaValue]) => {
      assertRestaurantKey(areaKey);

      return {
        ...newRestaurant,
        ...{
          [areaKey]: {
            ...areaValue,
            availableTables: Object.entries(
              restaurantData[areaKey].availableTables
            ).reduce((newTables, [tableKey, tableValues]) => {
              return {
                ...newTables,
                [tableKey]: {
                  ...tableValues,
                  times: getRandomTimes(seed, areaKey),
                },
              };
            }, restaurantData[areaKey].availableTables),
          },
        },
      };
    },
    restaurantData
  );

  return data;
};

const getRandomTimes = (seed: number, areaKey: string) => {
  // 17:00 -> 22:00
  const numbers = Array.from(Array(6).keys()).map((time) => time + 17);
  const times = numbers.map((number) => `${number}:00`);

  return times.reduce<string[]>((accumulator, currentTime) => {
    const random = Math.floor(cachedRandom(areaKey + seed + currentTime) * 100);

    if (random > 40) {
      return [...accumulator, currentTime];
    }

    if (random < 25 && random > 10 && currentTime !== "22:00") {
      return [...accumulator, currentTime.replace("00", "30")];
    }

    return [...accumulator];
  }, []);
};

const assertRestaurantKey: (
  value: string
) => asserts value is keyof typeof restaurantData = (value) => {
  if (!Object.keys(restaurantData).includes(value)) {
    throw new Error("This shouldn't happen");
  }
};

export { getAvailableTables };
