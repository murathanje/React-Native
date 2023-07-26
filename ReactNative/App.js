import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import UsersScreen from './src/screens/Users';
import UsersDetail from './src/screens/USersDetail';
import HeaderLogo from './components/HeaderLogo';






const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Anasayfa',
            headerTitle: (props) => <HeaderLogo {...props} />
          }}
        />
        <Stack.Screen
          name="Users"
          component={UsersScreen}
          options={{
            title: 'Kullanıcılar'
          }}
        />
        <Stack.Screen
          name="Detay"
          component={UsersDetail}
          options={({ route }) => ({ title: route.params?.item.name || 'Detay4' })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;