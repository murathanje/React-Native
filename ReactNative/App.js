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
  const [name, setName] = useState("Mehmet");
  const [age, setAge] = useState(19);
  const [isvisible, setIsVisible] = useState(true);
  
  const handleButtonClick = () => {
    let isim =  name  == "Mehmet" ? "Ahmet" : "Mehmet";
    let yas =  age  == 19 ? 20 : 19;
    setName(isim);
    setAge(yas);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.hide} onPress={() => setIsVisible(!isvisible)}>
        <Text>{isvisible ? "Gizle" : "Göster"}</Text>
      </TouchableOpacity>
      {
        isvisible && (
          <>
            <Text>İsim: {name}</Text>
            <Text>Yaş: {age}</Text>
            <TouchableOpacity style={styles.click} onPress={handleButtonClick}>
              <Text>Değiştir</Text>
            </TouchableOpacity>
          </>
        )
      }
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