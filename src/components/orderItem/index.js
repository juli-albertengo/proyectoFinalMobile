import React from 'react';
import {View, Text } from 'react-native';
import { styles } from './styles';


const OrderItem = ({ order }) => {

    return (
        <View style={styles.container}>
            <View style={styles.orderContainer}>
                <Text style={styles.orderId}>ORDER ID #{order.id}</Text>
                <Text style={styles.orderAmount}>Total Order Amount: ${order.total}</Text>
            </View>
        </View>
    );
};

export default OrderItem;
