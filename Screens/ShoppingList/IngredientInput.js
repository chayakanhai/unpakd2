import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const IngredientInput = props => {
  const [enteredIngredient, setEnteredIngredient] = useState("");
  const ingredientInputHandler = enteredText => {
    setEnteredIngredient(enteredText);
  };

  const addIngredientHandler = () => {
    props.onAddIngredient(enteredIngredient);
    setEnteredIngredient("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ingredient"
          style={styles.textInput}
          onChangeText={ingredientInputHandler}
          value={enteredIngredient}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addIngredientHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    width: "80%",
    backgroundColor: "white",
    borderWidth: 1,
    padding: 10,
    marginBottom: 0
  },
  buttonContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-evenly"
  },
  button: {
    width: "40%"
  }
});

export default IngredientInput;
