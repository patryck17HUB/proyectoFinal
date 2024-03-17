import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, } from "react-native";
import Musclelist from "./screens/musclelist";
import Home from "./screens/home";
import { Color, FontSize, FontFamily } from "./styles/GlobalStyles";

// Navegar entre paginas
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
    initialRouteName="Feed"
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#e91e63',
      tabBarStyle: { 
        position: 'absolute' ,
        backgroundColor: Color.pie, 
      },
    }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Musclelist" component={Musclelist} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

/*
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={pageoptions} />
        <Stack.Screen name="Musclelist" component={Musclelist} options={pageoptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/
const pageoptions = {
  title: "Ejercicios Cabrones",
  headerStyle: {
    backgroundColor: "lightblue",
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerShown: false,
};