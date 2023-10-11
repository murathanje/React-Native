import { View, Text, StyleSheet, Button, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const UserDetail = ({ route, navigation }) => {
    const data = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>UserDetail</Text>
            <Text style={styles.text}>{JSON.stringify(data,null,2)}</Text>

            <TouchableOpacity
                style={styles.updateHeaderButton}
                onPress={()=> navigation.setOptions({
                    title: "Updated!"
                })}
            >
                <Text style={styles.text}>Update Header</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text:{
        fontSize: 24,
    },
    updateHeaderButton: {
        width: 200,
        backgroundColor: "red",
        alignItems: "center",
        paddingBottom: 10,
        marginTop: 30,
    },
    container: {
        flex: 1,
        alignItems: "center",
    }
});

export default UserDetail