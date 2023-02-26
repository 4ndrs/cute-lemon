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
