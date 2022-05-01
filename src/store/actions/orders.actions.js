import { orderTypes } from '../types/orders.types';
import { insertOrder, fetchOrders } from '../../db/index';

const { ADD_ORDER, FETCH_ORDERS} = orderTypes;

export const orderActions = {
    addOrder: (total) => {
        return async dispatch => {
            try {
                const result = await insertOrder(total);
                dispatch({
                    type: ADD_ORDER,
                    order: {
                        id: result.insertId,
                        total,
                    },
                });
            } catch (err) {
                console.log(err);
            }
        };
    },
    loadOrders: () => {
        return async dispatch => {
            try {
                const result = await fetchOrders();
                dispatch({
                    type: FETCH_ORDERS,
                    orders: result,
                  });
            } catch (err) {
                console.log(err);
            }
        };
    },
};
