import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={[styles.box, styles.box1]}>
        <Text style={styles.text}>Merhaba</Text>
      </View>

      <View style={[styles.box, styles.box2]}>
        <Text style={styles.text}>React</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.text}>Deneme</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    width: 200,
    height: 200,
    backgroundColor: "red",
    textAlign: 'center',
    marginTop: 50
  },

  box1:{
    backgroundColor: "#990101"
  },

  box2:{
    backgroundColor: "#010199"
  },

  text:{
    color: "black",
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: "lightgray"
  }
});
