import { cartExampleObj } from "../cartExampleObj";
import { recomendedItem } from "../recomendedItem";
import { img0 } from "../sliderImageArr";

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
  cart: cartExampleObj,
  promocode: true
}