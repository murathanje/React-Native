import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const Counters = () => {
    const [count, setCount] = useState(0);

    // useEffect(()=>{
    //     alert("Maunt")
    // }, [])
    
    useEffect(()=>{
       const interval = setInterval(()=>{
            setCount((prev) => prev + 1)
       },1000)

       return() => {
        clearInterval(interval)
       }
    }, [])
2
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{count}</Text>
            <View style={{flexDirection: "row"}}>
                <TouchableOpacity style={styles.button} onPress={()=>setCount(count+1)}>
                    <Text style={styles.click}>Increase</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>setCount(count-1)}>
                    <Text style={styles.click}>Decreas</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10, 
        padding: 10,
        marginTop: 20,
        marginLeft: 10
    },
    click: {
        fontSize: 20,
        fontWeight: "bold",
    },
    text: {
        fontSize: 35,
        fontWeight: "bold",
    },
});

export default Counters;