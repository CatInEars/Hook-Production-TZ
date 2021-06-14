export const findSumm = (cart: ICartProductsData): number => {
  let sum = 0;
  for (let key in cart) {
    sum += cart[key].cartCount * cart[key].price
  }
  return +sum.toFixed(2);
};