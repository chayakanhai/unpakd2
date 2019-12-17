import React, { Component } from "react";
import { ImageBackground, Text, resizeMode } from "react-native";

const remote =
  "https://www.google.com/url?sa=j&url=https%3A%2F%2Fwww.goodhousekeeping.com%2Fhealth%2Fdiet-nutrition%2Fg28626105%2Fbest-health-food-stores-online%2F&uct=1566970931&usg=SZIoxA2F8nUeTmz8mANFdMNnCEs.&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICF8v6K7OUCFQAAAAAdAAAAABAD";

class BackgroundTest extends Component {
  render() {
    const resizeMode = "center";
    return (
      <ImageBackground
        style={{
          flex: 1,
          resizeMode
        }}
        source={{ uri: remote }}
      />
    );
  }
}
export default BackgroundTest;
