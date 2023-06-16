import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("Mehmet") 
  return (
    <View style={styles.container}>

      <Text>{name}</Text>
      <Button style={styles.but} title='Click' onPress={()=>setName("Ahmet")}>Click</Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  but:{
    width: "60%",
    height: 10,
    backgroundColor: "#121212",
    color: "black"
  },

  box: {
    width: 200,
    height: 200,
    backgroundColor: "red",
    textAlign: 'center',
    marginTop: 50
  },

  box1:{
    backgroundColor: "#990101"
  },

  box2:{
    backgroundColor: "#010199"
  },

  text:{
    color: "black",
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: "lightgray"
  }
});
