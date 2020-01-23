import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { SafeAreaView } from "react-navigation";




import Home from "./components/Screens/Home";
import SignUp from "./components/Screens/SignUp";
import ShoppingList from "./components/Screens/ShoppingList";
import Map from "./components/Screens/Map";
import { render } from "react-dom";
import store from "./components/services/getStore"

if (Platform.OS === "android") {
    // removes extra space at top of header on android
    SafeAreaView.setStatusBarHeight(0);
}


const HomeStack = createStackNavigator({
        Home: { screen: Home },
        StoreSignUp: { screen: SignUp },
        Map: { screen: Map },
        ShoppingList: { screen: ShoppingList },
        Store:{screen :store},
    },

);
const SignUpStack = createStackNavigator({
    StoreSignUp: { screen: SignUp },
    ShoppingList: { screen: ShoppingList },
    Home: { screen: Home },
    Map: { screen: Map },
    Store:{screen :store},
}, );


const ShoppingListStack = createStackNavigator({
        ShoppingList: { screen: ShoppingList },
        Map: { screen: Map },
        Home: { screen: HomeStack },
        SignUp: { screen: SignUpStack },
        Store:{screen :store},
    },

);

const MapStack = createStackNavigator({
    Map: { screen: Map },
    ShoppingList: { screen: ShoppingList },
    Home: { screen: HomeStack },
    SignUp: { screen: SignUpStack },
    Store:{screen :store},
});
const storeStack = createStackNavigator({
  Store:{screen :store},
  Map: { screen: Map },
  ShoppingList: { screen: ShoppingList },
  Home: { screen: HomeStack },
  SignUp: { screen: SignUpStack }
  
});

const App = createBottomTabNavigator({
    Home: { screen: HomeStack },
    SignUp: { screen: SignUpStack },
    ShoppingList: { screen: ShoppingListStack },
    Map: { screen: MapStack },
    store: {screen: storeStack}
}, );









export default createAppContainer(App);