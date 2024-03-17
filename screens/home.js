import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, } from "react-native";
import { styles } from "../styles/homestyles";

export default function Home({ navigation }) {
  return (
    <View style={styles.home}>
      <View style={[styles.encabezado]}>
        <Text style={[styles.si]}>Si</Text>
        <Text style={[styles.si]}>Si</Text>
      </View>

      <ScrollView style={[styles.contenido]}>
        <Text style={[styles.home1]}>HOME</Text>
        <Text style={[styles.home1]}>HOME</Text>
        <Text style={[styles.home1]}>HOME</Text>
        <Text style={[styles.home1]}>HOME</Text>
        <Text style={[styles.home1]}>HOME</Text>
        <Text style={[styles.home1]}>HOME</Text>
        <Text style={[styles.home1]}>HOME</Text>
        <Text style={[styles.home1]}>HOME</Text>
        <Text style={[styles.home1]}>HOME</Text>
        <Text style={[styles.home1]}>HOME</Text>
        <Text style={[styles.home1]}>HOME</Text>
       </ScrollView> 

    </View>
  );
}

/*      
  <TouchableOpacity style={styles.button}
    onPress={() => navigation.navigate('Home')}>
    <Text style={styles.muscleList}>Home</Text>
  </TouchableOpacity>
*/ 