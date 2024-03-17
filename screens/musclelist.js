import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, } from "react-native";
import { getMuscleList } from "../components/musclelistfunctions";
import { styles } from "../styles/muscleliststyles";

export default function MuscleList({ navigation }) {
  return (
    <View style={styles.home}>
      <View style={[styles.encabezado]}>
        <Text style={[styles.si]}>Si</Text>
        <Text style={[styles.si]}>Si</Text>
      </View>

      <ScrollView style={[styles.contenido]}>

        <TouchableOpacity style={styles.button}
          onPress={(getMuscleList)}>
          <Text style={styles.muscleList}>Obtener lista</Text>
        </TouchableOpacity>

      </ScrollView> 

    </View>
  );
}