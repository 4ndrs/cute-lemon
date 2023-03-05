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
  diners: number;
  occasion: Occasion;
  area: Area;
  name: string;
  email: string;
  comments: string;
}

type Area =
  | "Storefront (Indoors)"
  | "Storefront (Outdoors)"
  | "Indoors (Zone A)"
  | "Indoors (Zone B)";

type Occasion = "Standard" | "Birthday" | "Anniversary" | "Engagement";
