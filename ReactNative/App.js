import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import Title from "./src/components/Title.js"
import Header from "./src/components/Header.js"
import User from "./src/components/User.js"
import Users from "./src/components/Users.js"
import ListItem from './src/components/ListItem.js';
import { 
  Button, 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
  FlatList,
  SafeAreaView,
  RefreshControl
} from 'react-native';



// const DATA = [
//   {
//     id: '1',
//     title: 'First Item',
//   },
//   {
//     id: '2',
//     title: 'Second Item',
//   },
//   {
//     id: '3',
//     title: 'Third Item',
//   },
//   {
//     id: '4',
//     title: 'First Item',
//   },
//   {
//     id: '5',
//     title: 'Second Item',
//   },
//   {
//     id: '6',
//     title: 'Third Item',
//   },
//   {
//     id: '7',
//     title: 'First Item',
//   },
//   {
//     id: '8',
//     title: 'Second Item',
//   },
//   {
//     id: '9',
//     title: 'Third Item',
//   },
//   {
//     id: '10',
//     title: 'First Item',
//   },
//   {
//     id: '11',
//     title: 'Second Item',
//   },
//   {
//     id: '12',
//     title: 'Third Item',
//   },
// ];


const App = () => {
  const [user, setUser] = useState({id: 1, name: "Mehmet"});
  
  const handleButtonClick = () => {
    // setUser({...user, id: 2})
    // setUser({...user, name: "Ali"})
    // setUser((prev) => ({...prev, id:3}))
    setUser({name: "Murat", id: 5})
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>ID: {user.id}</Text>
      <Text>İsim: {user.name}</Text>
      <TouchableOpacity style={styles.click} onPress={handleButtonClick}>
        <Text>Değiştir</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    },
    click: {
      marginTop: 30,
      fontSize: 20,
      fontWeight: 'bold'
  },
  hide: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: 'bold'
  }
  // box1: {
  //   backgroundColor: "gray",
  //   flex: 1,

  // },
  // box2: {
  //   backgroundColor: "bisque",
  //   flex: 1,
  //   flexDirection: "row"
  // },
  // child1: {
  //   flex: 1,
  //   backgroundColor: "black"
  // },
  // child2: {
  //   flex: 2,
  //   backgroundColor: "red"
  // },
  // child3: {
  //   flex: 1,
  //   backgroundColor: "#140156"
  // }

});

export default App;