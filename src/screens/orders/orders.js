import React, { useEffect } from 'react';
import {View, Text, FlatList } from 'react-native';

import { connect, useDispatch, useSelector} from 'react-redux';
import { orderActions } from '../../store/actions/orders.actions';

import OrderItem from '../../components/orderItem';

import { styles } from './styles';


const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);

    useEffect(() => {
        dispatch(orderActions.loadOrders());
      }, [ dispatch]);

    const renderItem = (({ item } ) => <OrderItem order={item}/>);

    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>My Orders</Text>
            <FlatList
                data={orders}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};

export default connect()(Orders);
