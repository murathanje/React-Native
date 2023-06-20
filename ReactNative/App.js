import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from "react";

export default function App() {
  return (
    <View style={styles.container}></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
