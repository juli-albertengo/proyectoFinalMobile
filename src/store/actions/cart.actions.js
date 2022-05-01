import { cartTypes } from '../types/cart.types';

const { ADD_ITEM, REMOVE_ITEM, CONFIRM_CART } = cartTypes;

export const addItem = (item) => ({
    type: ADD_ITEM,
    item,
});

export const removeItem = (bookId) => ({
    type: REMOVE_ITEM,
    bookId,
});

export const confirmCart = () => ({
    type: CONFIRM_CART,
});
