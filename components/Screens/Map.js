/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, Image } from "react-native";

import IngredientItem from "../IngredientItem";
import IngredientInput from "../IngredientInput";
import HomeScreen from "./Home";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

this.state = {
  markers: [{
    title: 'burgundisch',
    coordinates: {
      latitude: 52.370216,
      longitude: 5.295
    },
  },
  {
    title: 'mister ham',
    coordinates: {
      latitude: 52.870216,
      longitude: 5.295
    },  
  }]
}
const Map = props => {  
  return (
    <View style= {styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 52.370216,
         longitude: 5.295,
         latitudeDelta: 3.85,
         longitudeDelta: 3.221,
       }}>
          {this.state.markers.map(marker => (
    <MapView.Marker 
      coordinate={marker.coordinates}
      title={marker.title}
    />
  ))}
</MapView>
     {/* <View>
            <Button onPress={() =>props.navigation.navigate('HomeScreen')} title="Home"/>
     </View> */}
   </View>   
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: "#40bf80",
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 600,
    width: 420,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;