import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, } from "react-native";
import { styles } from "../styles/explorestyles";
import { globalstyles } from "../styles/GlobalStyles";

export default function Explore({ navigation }) {
  return (
    <View style={globalstyles.background}>

      <ScrollView style={[globalstyles.contenido]}>
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