import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';


const CartItem = ({ book, onDelete }) => {

    const removeFromCart = () => {
        onDelete(book.bookId);
    };

    return (
        <View style={styles.container}>
            <View style={styles.bookInfoContainer}>
                <Text style={styles.bookTitle}>{book.title}</Text>
                <Text style={styles.bookQuantity}>Amount: {book.quantity}</Text>
                <Text style={styles.bookPrice}>Price: ${book.price}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={removeFromCart}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>- Remove from Cart</Text>
                        </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CartItem;
