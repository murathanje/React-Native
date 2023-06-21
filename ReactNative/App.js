import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import Title from "./src/components/Title.js"
import Header from "./src/components/Header.js"
import User from "./src/components/User.js"
import Users from "./src/components/Users.js"
import { 
  Button, 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback 
} from 'react-native';

const handleClick = () => {
  alert("Merhaba")
}


const App = () => {
  return (
    <View style={styles.container}>
      <Button title='Click Button' onPress={handleClick}/>
      <TouchableOpacity onPress={handleClick}>
        <Text>Click TouchableOpacity</Text>
      </TouchableOpacity>

      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor={"yellow"}
        onPress={handleClick}
      >
        <Text>Clicl TouchableHighlight</Text>
      </TouchableHighlight>

      <TouchableWithoutFeedback
        onPress={handleClick}
      >
        <Text>Click TouchableWithoutFeedback</Text>
      </TouchableWithoutFeedback>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    },
  // box1: {
  //   backgroundColor: "gray",
  //   flex: 1,

  // },
  // box2: {
  //   backgroundColor: "bisque",
  //   flex: 1,
  //   flexDirection: "row"
  // },
  // child1: {
  //   flex: 1,
  //   backgroundColor: "black"
  // },
  // child2: {
  //   flex: 2,
  //   backgroundColor: "red"
  // },
  // child3: {
  //   flex: 1,
  //   backgroundColor: "#140156"
  // }

});

export default App;