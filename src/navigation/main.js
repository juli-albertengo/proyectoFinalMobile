import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import COLORS from '../constants/colors';

import Home from '../screens/home/home';
import Books from '../screens/books/books';
import Cart from '../screens/cart/cart';
import Orders from '../screens/orders/orders';

const TabStack = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <TabStack.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
                color = focused ? COLORS.yellow : COLORS.black;
              } else if (route.name === 'Books') {
                iconName = focused ? 'book' : 'book-outline';
                color = focused ? COLORS.yellow : COLORS.black;
              } else if (route.name === 'Cart') {
                iconName = focused ? 'cart' : 'cart-outline';
                color = focused ? COLORS.yellow : COLORS.black;
              } else if (route.name === 'Orders') {
                iconName = focused ? 'person' : 'person-outline';
                color = focused ? COLORS.yellow : COLORS.black;
              }
              return <IonicIcons name={iconName} size={32} color={color}/>;
            },
          })}
          tabBarOptions={{
            showLabel: false,
          }}
        >
        <TabStack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
        />
        <TabStack.Screen
            name="Books"
            component={Books}
            options={{ headerShown: false }}
        />
        <TabStack.Screen
            name="Cart"
            component={Cart}
            options={{ headerShown: false }}
        />
        <TabStack.Screen
            name="Orders"
            component={Orders}
            options={{ headerShown: false }}
        />
        </TabStack.Navigator>
    );
};

export default MainNavigator;

