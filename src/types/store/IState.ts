interface IState {
  productsData:  IProductsData,
  recomendedItem: IProductsData
  cart: {
    [id: number]: ICartProduct
  }
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
  previeImage: any
}

interface ICartProduct extends IProduct {
  cartCount: number
}