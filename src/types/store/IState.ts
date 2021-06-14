interface IState {
  productsData:  IProductsData,
  recomendedItem: IProductsData
  cart: ICartProductsData,
  promocode: boolean
}

interface IProductsData {
  [id: number]: IProduct
}

interface ICartProductsData{
  [id: number]: ICartProduct
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