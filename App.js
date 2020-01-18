import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';


import Home from "../unpakd-copy/components/Screens/Home";
import SignUp from "../unpakd-copy/components/Screens/SignUp";
import ShoppingList from "../unpakd-copy/components/Screens/ShoppingList/ShoppingList";






const HomeStack = createStackNavigator({
        //Defination of Navigaton from home screen
        Home: { screen: Home },
        StoreSignUp: { screen: SignUp },        
        ShoppingList: { screen: ShoppingList}
    },

);
const SignUpStack = createStackNavigator({

        StoreSignUp: { screen: SignUp },
        ShoppingList: { screen: ShoppingList},
        Home: { screen: Home },

    },
    );
    const ShoppingListStack = createBottomTabNavigator({
        ShoppingList: { screen: ShoppingList},
        Home: { screen: HomeStack },
        SignUp: { screen: SignUpStack },
    },

);
const App = createBottomTabNavigator({
        Home: { screen: HomeStack },
        SignUp: { screen: SignUpStack },
        ShoppingList: { screen: ShoppingList},
    },


);
export default createAppContainer(App);