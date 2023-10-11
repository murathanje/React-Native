import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const item = ({ item }) => {
  return (
    <View style={styles.container}>
          <Text style={styles.text}>{item.name}</Text>
    </View>
  ) 
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        padding: 10,
        backgroundColor: "#aeaeae",
        textAlign: "center",
        alignItems: "center",
        marginTop: 20,
    },
    text: {
        fontSize: 30,
    },
})
export default item;