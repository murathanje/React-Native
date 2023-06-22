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
import Counters from './src/components/Counters.js';


const App = () => {
  const [isvisible,setIsVisible] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {isvisible && <Counters />}
      <Button title='Göster/Gizle' onPress={()=>setIsVisible(!isvisible)}/>
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
    marginTop: 20,
    fontSize: 20,
    fontWeight:'bold'
  }
});

export default App;