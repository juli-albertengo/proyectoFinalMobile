import { cartTypes } from '../../types/cart.types';

const { ADD_ITEM, REMOVE_ITEM, CONFIRM_CART } = cartTypes;

const initState = {
    items: [],
    total: 0,
};

const sumTotal = (list) => list.map(item => item.quantity * item.price).reduce((acc, curr) => acc + curr, 0);

const cartReducer = (state = initState, action) => {
  switch (action.type) {
      case ADD_ITEM:
          const indexItem = state.items.findIndex(item => item.bookId === action.item.bookId);
          if (indexItem === -1) {
              const item = {...action.item, quantity: 1};
              const updatedCart = [...state.items, item];
              return {
                  ...state,
                  items: updatedCart,
                  total: sumTotal(updatedCart),
              };
          }
          const items = [...state.items].map(item => {
              if (item.bookId === action.item.bookId) {item.quantity++;}
              return item;
          });
          return {
              ...state,
              items,
              total: sumTotal(items),
          };
      case REMOVE_ITEM:
          const cleanCart = [...state.items].filter(book => book.bookId !== action.bookId);
          return {
              ...state,
              items: cleanCart,
              total: sumTotal(cleanCart),
          };
      case CONFIRM_CART:
          const emptyCart = [];
          return {
              ... state,
              items: emptyCart,
              total: 0,
          };
      default:
          return state;
  }
};

export default cartReducer;
