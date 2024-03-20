import React, { useEffect, useState } from "react";
import { View, Image, Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, TextInput, } from "react-native";
import Workouts from "./screens/workouts";
import Explore from "./screens/explore";
import Profile from "./screens/profile";
import Settings from "./screens/settings";
import Login from "./screens/login";
import { Color, FontSize, FontFamily } from "./styles/GlobalStyles";

import { Text, BottomNavigation } from 'react-native-paper';

// Navegar entre paginas
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TabArr = [
  {
    name: "Explore",
    label: "Explorar",
    component: Explore,
    icon: "search-web",
    tabbarColor: "#FF1C1C",
  },
  {
    name: "Workouts",
    label: "Plan",
    component: Workouts,
    icon: "arm-flex",
    tabbarColor: "#72FF1C",
  },
  {
    name: "Profile",
    label: "Perfil",
    component: Profile,
    icon: "account",
    tabbarColor: "#1CFFE3",
  },
  {
    name: "Settings",
    label: "Config",
    component: Settings,
    icon: "cog",
    tabbarColor: "#D91CFF",
  },
];

//const Tab = createMaterialTopTabNavigator();

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MainTabs() {
  return (
    <SafeAreaView style={{flex: 1}}>
    <Tab.Navigator  
      shifting={true}
      barStyle={{ height: 70 }}
      screenOptions={{}}
    >
      {TabArr.map((item, index) => (
        <Tab.Screen 
          key={index} 
          name={item.name} 
          component={item.component}
          options={{
            tabBarColor: "#FF1C1C",
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name={item.icon} color = {color} size={26} />
            )
          }}
      />
      ))}

    </Tab.Navigator>
    </SafeAreaView>
  );
}

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      handleGetToken();
    }
    , 2000);
  }); 

  const handleGetToken = async () => {
    const token = "123456"
    //const token = await AsyncStorage.getItem("AccessToken");
    console.log(token);
    if (token) {
      setUserLoggedIn(true);
    }
  }

  console.log(userLoggedIn);

  return (
    <NavigationContainer>
      {userLoggedIn ? (
        <MainTabs />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const pageoptions = {
  headerShown: false,
  tabBarShowLabel: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})

/* COSAS POR HACER
Paginas--
  Login
  Register
  Explorar
    Ejercicios
    Plantillas publicas (Rutinas)
  Entrenamientos
    Rutinas
    Programas
  Profile
    Registros
    Peso corporal
  Settings
    About
    Contact
    Help
    Terms
    Privacy
    Cookies
    Legal
*/

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