import React from 'react';
import {View, Text, FlatList } from 'react-native';

import { connect, useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/actions/cart.actions';

import { styles } from './styles';


import SingleBook from '../../components/singleBook';


const Books = ({navigation}) => {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books.books);

    const handleAddItem = (item) => {
        dispatch(addItem(item));
     };

    const renderItem = ({ item }) => <SingleBook book={item} onAdd={handleAddItem} navigation={navigation}/>;

    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>All Books</Text>
            <FlatList
                data={books}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};

export default connect()(Books);
