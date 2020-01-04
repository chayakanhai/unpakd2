/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, Image } from "react-native";
import { createStackNavigator , StackViewTransitionConfigs} from 'react-navigation'; 

import IngredientItem from "../IngredientItem";
import IngredientInput from "../IngredientInput";
import HomeScreen from "./Home";


export default function App() {
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addIngredientHandler = ingredientTitle => {
    setRecipeIngredients(currentIngredients => [
      ...currentIngredients,
      { id: Math.random().toString(), value: ingredientTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = ingredientId => {
    setRecipeIngredients(currentIngredients => {
      return currentIngredients.filter(
        ingredient => ingredient.id !== ingredientId
      );
    });
  };

  return (
    <View style={styles.screen}>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={require("../../assets/vegs.jpg")}
      ></Image>
      <Button title="Add New Ingredient" onPress={() => setIsAddMode(true)} />
      <IngredientInput
        visible={isAddMode}
        onAddIngredient={addIngredientHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={recipeIngredients}
        renderItem={itemData => (
          <IngredientItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: "#40bf80",
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center"
  }
});