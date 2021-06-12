interface IState {
  productData:  IProduct,
  recomendedItem: IProduct[]
  cart: {
    [id: number]: ICartProduct
  }
}

interface IProduct {
  id: number,
  name: string,
  count: string,
  price: number,
  currency: string,
  previeImage?: any
}

interface ICartProduct {
  count: number
}