/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
// eslint-disable-next-line prettier/prettier
import { createStackNavigator } from 'react-navigation-stack';
import Map from './components/Screens/Map';
import Home from './components/Screens/Home';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const mapStack = createStackNavigator({
    MapScreen: { screen: Map }
});

const ingredientStack = createStackNavigator({
    IngredientScreen: { screen: Home }
});

const tabNavigator = createBottomTabNavigator({
    MapScreen: mapStack,
    IngredientScreen: ingredientStack,
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            //const { routeName } = navigation.state;
            //let IconComponent = Ionicons;
            //let iconName;
            // if (routeName === 'Home') {
            //   iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            //   // Sometimes we want to add badges to some icons.
            //   // You can check the implementation below.
            //   IconComponent = HomeIconWithBadge;
            // } else if (routeName === 'Settings') {
            //   iconName = `ios-options`;
            // }
        },
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',

    },
});
const container = createAppContainer(tabNavigator);

export default container;