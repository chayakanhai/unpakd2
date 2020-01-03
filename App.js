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
    },

);
const SignUpStack = createStackNavigator({

        StoreSignUp: { screen: SignUp },
        Home: { screen: Home },

    },

);
const App = createBottomTabNavigator({
        Home: { screen: HomeStack },
        SignUp: { screen: SignUpStack },
    },


);
export default createAppContainer(App);