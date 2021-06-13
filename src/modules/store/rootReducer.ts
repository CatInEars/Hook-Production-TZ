import { initialState } from "./initialState";

export function rootReducer(state = initialState, action: IActions): IState {
  if (action.type === 'CART_COUNT_INCREMENT') {

    const toBeInCart = !!state.cart[action.id]
    let newObj = toBeInCart ? {...state.cart[action.id]} : {};

    if (!toBeInCart) {
      newObj = {...state.recomendedItem[action.id]}
    }

    return {
      ...state,
      cart: {
        ...state.cart,
        [action.id.toString()]: {
          ...newObj,
          cartCount: toBeInCart ? state.cart[action.id].cartCount + 1 : 1
        }
      }
    }

  } else if (action.type === 'CART_COUNT_DECREMENT') {

    return {
      ...state,
      cart: {
        ...state.cart,
        [action.id.toString()]: {
          ...state.cart[action.id],
          cartCount: state.cart[action.id].cartCount - 1
        }
      }
    }

  } 

  return state
}