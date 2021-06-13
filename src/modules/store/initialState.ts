import { recomendedItem } from "../recomendedItem";
import { eggs1, img0 } from "../sliderImageArr";

export const initialState: IState = {
  productsData: {
    4: {
      id: 12,
      name: 'Just Milk Semi-Skimmed 6 x 1L (Case of 2)',
      count: '1 pc',
      price: 1.59,
      currency: '£',
      previeImage: img0
    },
    ...recomendedItem
  },
  recomendedItem,
  cart: {
    12: {
      id: 12,
      cartCount: 2,
      name: 'Just Milk Semi-Skimmed 6 x 1L (Case of 2)',
      count: '1 pc',
      price: 1.59,
      currency: '£',
      previeImage: img0
    },
    1: {
      id: 1,
      cartCount: 1,
      name: 'Best-in 10 British Big Eggs',
      count: '1 pc',
      price: 1.59,
      currency: '£',
      previeImage: eggs1
    }
  }
}