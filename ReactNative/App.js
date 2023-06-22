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
  const [users, setUsers] = useState([
    {
      id: 1, 
      name: "Mehmet"
    },
    {
      id:2, 
      name:"Ahmet"
    }
  ]);

  const handlePress = () => {
    setUsers((prev) => [  
    { 
      id: Math.floor(Math.random()*1000),
      name: Math.floor(Math.random() * 1000),
    },
    ...prev
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        style={{marginTop:50}}
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
      <Button title='Ekle' onPress={handlePress}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    item: {
      backgroundColor: "#eeeeee",
      padding: 10,
      borderBottomWidth:1
  },
  text: {
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