export type Dish = Readonly<{
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  price: number;
}>;

export type Comment = Readonly<{
  id: number;
  name: string;
  nickname: string;
  imageSrc: string;
  comment: string;
  rating: number;
}>;

export interface FormData {
  date: string;
  time: string;
  diners: Seats;
  occasion: Occasion;
  area: AreaName;
  name: string;
  email: string;
  comments: string;
}

export type Restaurant = {
  [name in AreaName]: Area;
};

interface Area {
  petsAllowed: boolean;
  smokingAllowed: boolean;
  availableTables: AvailableTables;
}

type AvailableTables = {
  [seats in Seats]: number;
};

type AreaName =
  | "Storefront (Indoors)"
  | "Storefront (Outdoors)"
  | "Indoors (Zone A)"
  | "Indoors (Zone B)";

type Seats = 2 | 4 | 6;
type Occasion = "Standard" | "Birthday" | "Anniversary" | "Engagement";
