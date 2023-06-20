import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Title = () => {
    return (
        <View>
            <Text style = {styles.title}>Merhaba</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: "700"
    }
})

export default Title;