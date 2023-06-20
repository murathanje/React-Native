import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}>
        <View style= {styles.child1}></View>
        <View style= {styles.child2}></View>
        <View style= {styles.child3}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    },
  box1: {
    backgroundColor: "gray",
    flex: 1,

  },
  box2: {
    backgroundColor: "bisque",
    flex: 1,
    flexDirection: "row"
  },
  child1: {
    flex: 1,
    backgroundColor: "black"
  },
  child2: {
    flex: 2,
    backgroundColor: "red"
  },
  child3: {
    flex: 1,
    backgroundColor: "#140156"
  }

});
