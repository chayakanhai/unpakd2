import React, { Component } from "react";
import { View, StyleSheet, Text, Button, Image, TouchableOpacity, StatusBar } from "react-native";
import SignUp from "../Screens/SignUp";
import SafeAreaView from 'react-native-safe-area-view';
class Home extends Component {
    render() {
        return ( 
            <SafeAreaView style={{ flex: 1, paddingBottom:2 }}>
                <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <View style = { styles.container } > 
            <View style = { styles.logoContainer } >
                <Image style = { styles.logo }
                    source = {require("../../assets/logo1.png") } >
                </Image>
             <TouchableOpacity
                style={styles.button}
                onPress={()=> this.props.navigation.navigate('Map')}>
                <Text style={{color: 'white'}}> GO FIND STORES! </Text>
            </TouchableOpacity>
            <View style={styles.infoContainer}>
            <Text style={styles.title}>Plasticfree food shopping for a better world!</Text>
                 <TouchableOpacity
                style={styles.button2}
                onPress={()=> this.props.navigation.navigate('SignUp')}>
                <Text style={{color: 'white'}}> SIGN UP AS A STORE </Text>
            </TouchableOpacity> 
            </View>
            </View > 
            </View>
           </SafeAreaView>
       
        );
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'column',
        width: "100%",
        height: "100%",
        padding: 50,
    },
    earth:{
        width: '50%',
        marginTop: 20,
        height: 50,
        alignSelf: 'auto'
        
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#74d14c',
        padding: 10
      },
      button2: {
        alignItems: 'center',
        backgroundColor: '#0099FF',
        padding: 10
      },
   
    logo: {
        width: '100%',
        height: 300,
        marginTop: 10,
        position: 'absolute'
    },
    
    title: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 400
    },
    infoContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 20, 
        height: 50,
        padding: 20,
        
    },
    
})



export default Home;