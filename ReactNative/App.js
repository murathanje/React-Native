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
  TouchableWithoutFeedback,
  Image
} from 'react-native';

const handleClick = () => {
  alert("Merhaba")
}


const App = () => {
  return (
    <View style={styles.container}>
      <Image  
      resizeMode='cover'
      source={require('./assets/1.jpeg')}
      style={{width:"100%", height:180, borderWidth:2, borderColor: "red"}}
      />
      <Image  
      resizeMode='contain'
        source={{ uri:"https://upload.wikimedia.org/wikipedia/commons/4/40/Galata_Kulesi_-_%C4%B0stanbul%2C_T%C3%BCrkiye_2014-05-16_12-26.jpeg"}}
      style={{width:"100%", height:180, borderWidth:2, borderColor: "red"}}
      />
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