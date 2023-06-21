import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from "react";

import Title from "./src/components/Title.js"
import Header from "./src/components/Header.js"
import User from "./src/components/User.js"
import Users from "./src/components/Users.js"

const App = () => {
  return (
    <View style={styles.container}>
      <Title text = "Merhaba React Native" color= "red" numberOfLines={1} />
      <Title text="React Native" color="green" numberOfLines={2} />
      <Title text="Native" color="blue" numberOfLines={3} />
      <Header />

      <User data = {{ id: 1, name: "Mehmet"}}/>
      <Users data = {["Ahmet", "Mehmet", "Ali"]}/>
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