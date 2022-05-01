import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';

import { connect, useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../store/actions/cart.actions';
import { confirmCart } from '../../store/actions/cart.actions';
import { orderActions } from '../../store/actions/orders.actions';

import CartItem from '../../components/cartItem';

import { styles } from './styles';


const Cart = ({navigation}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);

    const handleDeleteItem = (id) => {
        dispatch(removeItem(id));
     };

    const handleConfirmCart = () => {
        if ( items.length === 0 ) {
            Alert.alert('You must select books first');
        } else {
            dispatch(orderActions.addOrder(total));
            dispatch(confirmCart());
            navigation.navigate('Orders');
        }
    };

    const renderItem = (({ item } ) => <CartItem book={item} onDelete={handleDeleteItem} />);

    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>My Cart</Text>
            <FlatList
                data={items}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
            <View style={styles.footerContainer}>
                <View>
                    <Text style={styles.textTotal}>Total: ${total}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={handleConfirmCart}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Confirm Order</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default connect()(Cart);
