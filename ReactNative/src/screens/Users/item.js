import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const item = ({ item }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Detay", { item })}>
                    <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#D8D8D8",
        borderBottomWidth: 1,
        width: '100%'
    },
    text: {
        fontSize: 24,
    }
})
export default item