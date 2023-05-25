import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Tarefa({ data, deleteItem }){
  return(
    <View style={styles.container}>

      <TouchableOpacity style={styles.button} onPress={deleteItem}>
        <FontAwesome name="trash" size={20} color="#22272e"  />
      </TouchableOpacity>

      <Text>{data.item}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#f0f0f0',
    marginTop: 12,
    padding: 12,
    borderRadius: 4,
    flexDirection: 'row'
  },
  button:{
    marginRight: 8,
  }
})