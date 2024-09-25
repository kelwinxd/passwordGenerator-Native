import {StyleSheet, View, Text, TouchableOpacity, Image, Modal} from 'react-native'
import Slider from '@react-native-community/slider'
import { useState } from 'react'
import ModalPass from '../../components/modal/index'
import Saved from '../../components/modal/saved'




let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function Home(){

  const [size,setSize] = useState(8)
  const [pass, setPass] = useState("")
  const [modal, setModal] = useState(false)
  const [saved, setSaved] = useState(false)
  

  function changePass(){
    let password = ""

    for(let i = 0,n = charset.length; i < size; i++){
        password+= charset.charAt(Math.floor(Math.random() * n))

    }
    console.log(password)
    setPass(password)
    setModal(true)
  }

  function closeModal(){
    setModal(false)
    
  }

return (
  <>
<View style={styles.container}>
<Image 
source={require("../../assets/lock.png")}
/>

<Text style={styles.textChar}>{size} Characters</Text> 
<View style={styles.areaSlide}>
<Slider 
style={{height:50}}
minimumValue={5}
maximumValue={12}
maximumTrackTintColor='#000'
minimumTrackTintColor='#ffe81a'
thumbTintColor='#bdaa00'
step={1}
value={size}
onValueChange={(item) => setSize(item)}
/>

</View>

<TouchableOpacity style={styles.btn} onPress={changePass}>
  <Text>Generate Password</Text>
</TouchableOpacity>

<Modal visible={modal} transparent={true}  animationType='fade' >
  <ModalPass password={pass} closeM={closeModal} setSav={setSaved} />
</Modal>

<Modal visible={saved} transparent={true} animationType='fade'>
 <Saved setS={setSaved}/>
</Modal>

</View>
  </>
)

}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems:"center",
  justifyContent:"center",
  backgroundColor:"#dedede"
 },
 areaSlide:{
width:"80%",
backgroundColor:"white",
padding:5,
borderRadius:16,

 },
 btn: {
  marginTop:17,
  backgroundColor:"#ffe81a",
  padding:8,
  height:50,
  width:"60%",
  alignItems:"center",
  justifyContent:"center",
  borderRadius:14,
 },
 textChar: {
  fontSize:23,
  marginBottom:24,
  fontWeight:"600"
 }
})