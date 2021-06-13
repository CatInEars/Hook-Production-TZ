type IActions = ICartCount | IPromocode;

type ICartCount = ICountIncrement | ICountDecrement

interface ICountIncrement {
  type: 'CART_COUNT_INCREMENT',
  id: number
}

interface ICountDecrement {
  type: 'CART_COUNT_DECREMENT',
  id: number
}

interface IPromocode {
  type: 'PROMOCODE_CHANGE',
  value: boolean
}