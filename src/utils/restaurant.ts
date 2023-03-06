import type { Restaurant } from "../types";

/**
 * Restaurant structure (imaginary)
 *
 *  "Storefront (Indoors)"
 *    - No smoking area
 *    - Pets allowed
 *    - 2 seats (4 tables), 4 seats (3 tables), 6 seats (1 table)
 *
 *  "Storefront (Outdoors)"
 *    - Smoking area
 *    - Pets allowed
 *    - 2 seats (6 tables), 4 seats (4 tables), 6 seats (3 tables)
 *
 *  "Indoors (Zone A)"
 *    - No smoking area
 *    - No pets allowed
 *    - 2 seats (4 tables), 4 seats (2 tables), 6 seats (0 tables)
 *
 *  "Indoors (Zone B)";
 *    - No smoking area
 *    - Pets allowed
 *    - 2 seats (0 tables), 4 seats (5 tables), 6 seats (4 tables)
 *
 */
const restaurant: Restaurant = {
  "Storefront (Indoors)": {
    smokingAllowed: false,
    petsAllowed: true,
    availableTables: { 2: 4, 4: 3, 6: 1 },
  },

  "Storefront (Outdoors)": {
    smokingAllowed: true,
    petsAllowed: true,
    availableTables: { 2: 6, 4: 4, 6: 3 },
  },

  "Indoors (Zone A)": {
    smokingAllowed: false,
    petsAllowed: false,
    availableTables: { 2: 4, 4: 2, 6: 0 },
  },

  "Indoors (Zone B)": {
    smokingAllowed: false,
    petsAllowed: true,
    availableTables: { 2: 0, 4: 5, 6: 4 },
  },
};

export { restaurant };
