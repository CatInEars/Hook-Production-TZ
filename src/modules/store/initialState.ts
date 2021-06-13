export const initialState: IState = {
  productData: {
    id: 12,
    name: 'Just Milk Semi-Skimmed 6 x 1L (Case of 2)',
    count: '1 pc',
    price: 1.59,
    currency: '£'
  },
  recomendedItem: [
    {
      id: 0,
      name: 'Best-in 10 British Big Eggs',
      count: '1 pc',
      price: 1.59,
      currency: '£'
    },
    {
      id: 1,
      name: 'Best-in 10 British Big Eggs',
      count: '1 pc',
      price: 1.59,
      currency: '£'
    },
    {
      id: 2,
      name: 'Best-in 10 British Big Eggs',
      count: '1 pc',
      price: 1.59,
      currency: '£'
    },
    {
      id: 3,
      name: 'Best-in 10 British Big Eggs',
      count: '1 pc',
      price: 1.59,
      currency: '£'
    }
  ],
  cart: {
    12: {
      count: 2
    },
    1: {
      count: 1
    }
  }
}