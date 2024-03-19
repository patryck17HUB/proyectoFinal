import React, { useEffect, useState } from "react";
import Workouts from "./screens/workouts";
import Explore from "./screens/explore";
import Profile from "./screens/profile";
import Settings from "./screens/settings";
import Login from "./screens/login";
import { Color, FontSize, FontFamily } from "./styles/GlobalStyles";

// Navegar entre paginas
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

//const Tab = createMaterialBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator 
      initialRouteName="Explore"
      tabBarPosition="bottom"
      screenOptions={{
          swipeEnabled: true,
          tabBarShowLabel: true,
          tabBarItemStyle: { 
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center' 
          },
          tabBarIndicatorStyle:{
            position: 'absolute',
            top: 0,
            height: 4,
          },
          tabBarStyle: { 
            backgroundColor: Color.secondary, 
          },
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#000000',
      }}
    >
      
      <Tab.Screen 
        name="Explore" 
        component={Explore}
        options={{
          tabBarLabel: 'Explorar',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="search-web" color = {color} size={26} />
          ),
        }}
      />

      <Tab.Screen 
        name="Workouts" 
        component={Workouts}
        options={{
          tabBarLabel: 'Plan',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="arm-flex" color = {color} size={26} />
          ),
        }}
      />

      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color = {color} size={26} />
          ),
        }}
      />

      <Tab.Screen 
        name="Settings" 
        component={Settings}
        options={{
          tabBarLabel: 'Config',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cog" color = {color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
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
    const token = await AsyncStorage.getItem("AccessToken");
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
};

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