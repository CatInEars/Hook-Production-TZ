interface IState {
  productsData:  IProductsData,
  recomendedItem: IProductsData
  cart: {
    [id: number]: ICartProduct
  },
  promocode: boolean
}

interface IProductsData {
  [id: number]: IProduct
}

interface IProduct {
  id: number,
  name: string,
  count: string,
  price: number,
  currency: string,
  previeImage: any,
  priceChanged?: boolean,
  sale?: boolean
}

interface ICartProduct extends IProduct {
  cartCount: number
}