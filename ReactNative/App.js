import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    backgroundColor: 'yellow',
    },
  box1: {
    backgroundColor: "gray",
    flex: 0.5,

  },
  box2: {
    backgroundColor: "bisque",
    flex: 0.5,
  }

});
