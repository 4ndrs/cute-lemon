let cache: { [id: string]: number } = {};

/**
 * Returns a cached random
 * Reload of the web app needed to reset the cache
 *
 */
const cachedRandom = (value: string) => {
  if (value in cache) {
    return cache[value];
  }

  const random = Math.random();
  cache[value] = random;

  return random;
};

export default cachedRandom;
