import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const UsersDetail = ({ route, navigation }) => {
    const { name, id } = route.params?.item || {};
    return (
        <View style={{ flex: 1, justifyContent: 'center', marginLeft: 100 }}>
            <Text style={styles.text}>Detay</Text>
            <Text style={styles.text}>ID: {id || 'Değer Yok'}</Text>
            <Text style={styles.text}>Adı: {name || 'Değer Yok'}</Text>
            <Button style= {styles.text}
                title="Update the title"
                onPress={() => navigation.setOptions({ title: 'Updated!' })}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        textAlign: 'left'
    }
})


export default UsersDetail