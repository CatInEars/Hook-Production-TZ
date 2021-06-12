interface IState {
  productData: IProduct,
  cart: {
    [propName: number]: ICartProduct
  }
}

interface IProduct {
  id: number,
  name: string,
  count: string,
  price: number,
  currency: string,
}

interface ICartProduct {
  count: number
}