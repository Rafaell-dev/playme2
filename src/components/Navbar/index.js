import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import styles from "./style";

export default function Navbar(){
  return(
    <View style={styles.boxNav}>
      <TouchableOpacity
      style={styles.button} 

      >
      <Text>Music</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.button} 
      >
      <Text>Video</Text>
      </TouchableOpacity>
      
    </View>
  )
}