import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button ({children}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {}
})