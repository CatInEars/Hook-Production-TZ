import { initialState } from "./initialState";

export function rootReducer(state = initialState, action: IActions): IState {
  if (action.type === 'CART_COUNT_INCREMENT') {
    return {
      ...state,
      cart: {
        ...state.cart,
        [action.id.toString()]: {
          count: state.cart[action.id].count + 1
        }
      }
    }
  } else if (action.type === 'CART_COUNT_DECREMENT') {
    return {
      ...state,
      cart: {
        ...state.cart,
        [action.id.toString()]: {
          count: state.cart[action.id].count - 1
        }
      }
    }
  } else {
    return state
  }
}