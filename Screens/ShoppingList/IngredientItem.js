import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const IngredientItem = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    paddingTop: 10,
    marginVertical: 10,
    backgroundColor: "#66ff99",
    borderColor: "black",
    borderWidth: 2
  }
});

export default IngredientItem;