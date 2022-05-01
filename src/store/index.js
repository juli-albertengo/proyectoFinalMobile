import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import bookReducer from './reducers/bookReducer';
import cartReducer from './reducers/cartReducer';
import ordersReducer from './reducers/ordersReducer';

const rootReducer = combineReducers({
    books: bookReducer,
    cart: cartReducer,
    orders: ordersReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
