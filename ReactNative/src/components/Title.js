import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const Title = (props) => {
    return (
        <View>
            <Text style = {[styles.title, {color: props.color}]}>{props.numberOfLines} - {props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: "700"
    }
})


Title.prototype = {
    text : PropTypes.string.isRequired, 
}

Title.defaultProps = {
    text: "Varsayılan"
}

export default Title;