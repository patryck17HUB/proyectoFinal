import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, } from "react-native";
import { styles } from "../styles/settingsstyles";
import { globalstyles } from "../styles/GlobalStyles";

export default function Settings({ navigation }) {
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
