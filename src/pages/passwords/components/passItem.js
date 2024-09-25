import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'



export function PassItem({data,remItem, modify}) {
  return (
    <Pressable style={[styles.content,modify]} onPress={remItem}>
      <Text style={styles.textItem}>{data}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
content: {
    backgroundColor: "black",
    width:300,
    paddingHorizontal: 8,
    paddingVertical: 11,
    marginBottom:12,
    borderRadius:8,

},
textItem:{
    color:"#fff",
    fontSize:17,
    paddingLeft:7,
}
})