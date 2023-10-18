import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';




import HomeScreen from './src/screens/Home';
import UsersScreen from './src/screens/Users';
import UserDetail from './src/screens/UserDetail';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const UsersStack = createNativeStackNavigator();

function UsersStackScreen() {
  return (
    <UsersStack.Navigator>
      <UsersStack.Screen name="Users" component={UsersScreen} />
      <UsersStack.Screen name="UserDetail" component={UserDetail} />
    </UsersStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();


function App() { 
  return (
    <NavigationContainer>
      <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'HomeTab') {
                iconName = 'home-outline'                  ;
              } else if (route.name === 'UsersTab') {
                iconName = 'people-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
        <Tab.Screen name="HomeTab" component={HomeStackScreen} options={{ tabBarBadge: 3, title: "Home"}} />
        <Tab.Screen name="UsersTab" component={UsersStackScreen} options={{ tabBarBadge: 30, title: "Users" }} />
      </Tab.Navigator>

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