type IActions = ICartCount;

type ICartCount = ICountIncrement | ICountDecrement

interface ICountIncrement {
  type: 'CART_COUNT_INCREMENT',
  id: number
}

interface ICountDecrement {
  type: 'CART_COUNT_DECREMENT',
  id: number
}
