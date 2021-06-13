import { recomendedItem } from "../recomendedItem";
import { eggs1, eggs2, img0 } from "../sliderImageArr";

export const initialState: IState = {
  productsData: {
    4: {
      id: 4,
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
    4: {
      id: 4,
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
      previeImage: eggs1,
      priceChanged: true
    },
    2: {
      id: 2,
      name: 'Best-in 10 British Big Eggs',
      count: '1 pc',
      price: 1.19,
      currency: '£',
      previeImage: eggs2,
      sale: true,
      cartCount: 12
    },
  }
}