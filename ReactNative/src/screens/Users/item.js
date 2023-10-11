import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const item = ({ item }) => {
  const navigation = useNavigation()
  return (
      <TouchableOpacity onPress={()=> navigation.navigate("UserDetail",item)}>
        <View style={styles.container}>
              <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableOpacity>
  ) 
}

const styles = StyleSheet.create({
    container: {
        width: 400,
        padding: 10,
        backgroundColor: "#ffaa00",
        textAlign: "center",
        alignItems: "center",
        marginTop: 20,
    },
    text: {
        fontSize: 30,
    },
})
export default item;