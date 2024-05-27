import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './Screens/SignupScreen';
import { app, auth } from './firbase';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/Home';
import LandingPage from './Screens/landingpage';
import Categories from './Screens/Categories';
import About from './Screens/About';
import Menu from './Screens/Menu';
import Recipies from './Screens/Recipies';
import Speciality from './Screens/Speciality';
import Deals from './Screens/Deals';
import Cart from './Screens/cart';
import Favorite from './Screens/Favorite';
import { Ionicons } from '@expo/vector-icons';
import { useEffect,useState } from 'react';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Stack1 = createStackNavigator();

const HomeStack1 = () => (
  <Stack1.Navigator screenOptions={{ headerShown: false }}>
    <Stack1.Screen name='loading' component={LandingPage} />
    <Stack1.Screen name='login' component={LoginScreen} />
    <Stack1.Screen name='SignUp' component={SignUpScreen} />
  </Stack1.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='index' component={HomeStack1}></Stack.Screen>
    <Stack.Screen name='Home' component={HomeScreen} />
    {/* <Stack.Screen name='categories' component={Categories} /> */}
    <Stack.Screen name='Speciality' component={Speciality} />
    <Stack.Screen name='Menu' component={Menu} />
    {/* <Stack.Screen name='recipie' component={Recipies} /> */}
    <Stack.Screen name='AboutUs' component={About} />
    <Stack.Screen name='deals' component={Deals} />
    {/* <Stack.Screen name='item' component={item}/> */}
    <Stack.Screen name='cart' component={Cart}/>
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarStyle: { display: route.name === 'loading' ? 'none' : 'block',margin:0 ,paddingHorizontal:0, borderTopLeftRadius:6,borderTopRightRadius:6,borderBottomLeftRadius:20,borderBottomRightRadius:20 ,backgroundColor:'#71797E' },
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Cart') {
          iconName = 'cart-outline';
        } else if (route.name === 'Fav') {
          iconName = 'heart-outline';
        } else if (route.name === 'Home' || route.name === 'categories' || route.name === 'Menu' || route.name === 'recipie' || route.name === 'deals') {
          iconName = 'home-outline';
        }

        return <Ionicons name={iconName} size={20} color={'black'} />;
      },
      tabBarLabel: () => null,
      headerShown: false,
      
    })}
  >
    <Tab.Screen name="loading" component={HomeStack1} options={{ tabBarStyle: { display: 'none' } }} />
    <Tab.Screen name="Home" component={HomeStack}  />
    <Tab.Screen name="Cart" component={Cart} />
    <Tab.Screen name="Fav" component={Favorite} />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

export default App;
