import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

export default function Saved({setS}) {
  
    useEffect(() => {
      setTimeout(() => {
        setS(false)
      }, 1300)
    },[])
  
  
  return (
    <View style={styles.saved}>
      <Text style={styles.textSave}>saved!</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    saved: {
      
      backgroundColor:"rgba(91, 230, 112, 0.8)",
      width:"60%",
      alignItems:"center",
      justifyContent:"center",
      alignSelf:"center",
      marginTop:"20%",
      height:80,
      borderRadius:8,
    },
    textSave: {
      color:'#fff',
      fontSize:24,
      fontWeight:"bold"
    }
})