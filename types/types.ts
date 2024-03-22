export interface IMenuItem {
  _id?: string;
  name: string;
  cuisine: string;
  image: string;
  price: number;
  description: string;
  isInCart: boolean;
  quantity: number;
}

export interface ICartItem {
  name: string;
  image: string;
  price: number;
  description: string;
  isInCart: boolean;
  quantity: number;
  cuisine: string;
}
