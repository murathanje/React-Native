import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const UsersDetail = ({route}) => {
    const data = route.params;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.text}>Detay</Text>
            <Text style={styles.text}>
                {
                    JSON.stringify(data, null, 2)
                }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
    }
})


export default UsersDetail