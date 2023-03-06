import type { Restaurant } from "../types";

const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

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
    availableTables: {
      2: { tables: 4, times },
      4: { tables: 3, times },
      6: { tables: 1, times },
    },
  },

  "Storefront (Outdoors)": {
    smokingAllowed: true,
    petsAllowed: true,
    availableTables: {
      2: { tables: 6, times },
      4: { tables: 4, times },
      6: { tables: 3, times },
    },
  },

  "Indoors (Zone A)": {
    smokingAllowed: false,
    petsAllowed: false,
    availableTables: {
      2: { tables: 4, times },
      4: { tables: 2, times },
      6: { tables: 0, times },
    },
  },

  "Indoors (Zone B)": {
    smokingAllowed: false,
    petsAllowed: true,
    availableTables: {
      2: { tables: 0, times },
      4: { tables: 5, times },
      6: { tables: 4, times },
    },
  },
};

export default restaurant;
