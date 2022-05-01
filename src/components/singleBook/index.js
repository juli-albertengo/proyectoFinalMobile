import React from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';


const SingleBook = ({ book, onAdd, navigation }) => {

    const img = book.img;

    const addToCart = () => {
        onAdd(book);
        navigation.navigate('Cart');
    };

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: img}} />
            <View style={styles.bookInfoContainer}>
                <Text style={styles.bookTitle}>{book.title}</Text>
                <Text style={styles.bookAuthor}>by {book.author}</Text>
                <Text style={styles.bookPrice}>${book.price}</Text>
                <TouchableOpacity onPress={addToCart}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>+ Add to Cart</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SingleBook;
