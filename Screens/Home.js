import React, { Component } from "react";
import { View, StyleSheet, Text, StatusBar, Button, Image } from "react-native";

class Home extends Component {
    render() {
        return ( 
        <View style = { styles.container } > 
        <StatusBar barStyle="light-content"/>
        
            <View style = { styles.logoContainer } >
                <Image style = { styles.logo }
                    source = { '../../assets/icon.png' } >
                </Image>

                <Text styles={styles.header}>UnpaKd</Text>
                
                <View style={styles.infoContainer}>
            <Text style={styles.title}>Plasticfree food shopping for a better world!</Text>
          
                <Button style= {styles.button} onPress={()=> this.props.navigation.navigate('signup')} title='Sign in as a store'></Button> 
           
            </View>
            </View > 
            
            </View>
            
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        flexDirection: 'column'
    },
   
    logo: {
        width: '50%',
        height: 56,
        position: 'absolute'
    },
    header:{
        color: 'black',
        fontSize: 60,
    },
    title: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 400
    },
    infoContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0, 
        height: 50,
        padding: 20,
        backgroundColor: 'green'
    },
    button: { 
      color: 'red'
    }
})



export default Home;