import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';








function App() { 
  return (
    <NavigationContainer>
      <DrawerNavigator />
      {/* <BottomTabNavigator /> */}
      {/* <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Anasayfa" }}
        />

        <Stack.Screen
          name="Users"
          component={UsersScreen}
          options={{
            title: "Kullanıcılar", 
            headerStyle: {
              backgroundColor: "#faefdd",
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            }, 
            headerTitleAlign: 'center',
            
          }}
        />

        <Stack.Screen
          name="UserDetail"
          component={UserDetail}
          options={({ route }) => ({ title: route.params.name, headerTitleAlign: 'center' })}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;