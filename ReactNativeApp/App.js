import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("Mehmet") ;
  const [age, setAge] = useState(29); 
  const [isVisible, setisVisible] = useState(true); 
  return (
    <View style={styles.container}>
      <Button style={styles.but} title={isVisible ? "Gizle" : "Göster"} onPress={() => setisVisible(!isVisible)}/>
      {isVisible && (
        <>
          <Text>{name}</Text>
          <Text>{age}</Text>
          <Button style={styles.but} title='İsmi Değiştir' onPress={()=>setName("Ahmet")}/>
          <Button style={styles.but} title='Yaşı Değiştir' onPress={()=>setAge(31)}/>
        </>
      )}

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
