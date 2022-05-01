import Order from '../../../models/order';
import { orderTypes } from '../../types/orders.types';

const { ADD_ORDER, FETCH_ORDERS } = orderTypes;


const initState = {
    orders: [],
};

const ordersReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            const newOrder = new Order(
                action.order.id,
                action.order.total
            );
            const orders = [...state.orders, newOrder];
            return {
                ...state,
                orders,
            };
        case FETCH_ORDERS:
            const fetchedOrders = action.orders;
            return {
                ...state,
                orders: fetchedOrders,
            };
        default:
            return state;
    }
};

export default ordersReducer;
