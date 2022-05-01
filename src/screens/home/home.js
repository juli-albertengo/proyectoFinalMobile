import React from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';


const Home = ({navigation}) => {

    const onPressRedirect = () => {
        navigation.navigate('Books');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Bookstore</Text>
            <Text style={styles.subTitle}>Cool Title</Text>
            <Image source={require('../../../assets/images/bookImage.png')}/>
            <Text style={styles.text}>In our Bookstore we want to sell books, so we encourage you to read more. Plus inspirational things here..</Text>
            <TouchableOpacity onPress={onPressRedirect}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Let's find your next read</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Home;
