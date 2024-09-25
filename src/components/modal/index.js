import {StyleSheet, View, Text, TouchableOpacity, Pressable, Modal} from 'react-native'
import * as Clipboard from 'expo-clipboard'
import useStorage from '../../hooks/useStorage'



export default function ModalPass({password, closeM, setSav}){
     const {saveItem} = useStorage()
    


    async function handleCopy(){
        await Clipboard.setStringAsync(password)
        

        alert("Password succesfully saved!")
    }

    function savePass(){
        if(password){
            saveItem("@passw",password)
            setSav(true)
            closeM()
        }
    }



    return (
        <>
        <View style={styles.container}>
            <View style={styles.modalCont}>
                <Text style={styles.textModal}>Generated Password</Text>

                <Pressable style={styles.innerPass} onLongPress={handleCopy}>
                    <Text style={styles.textInner}>
                        {password}
                    </Text>
                </Pressable>
                 <View style={styles.btnArea}>
               <TouchableOpacity style={styles.btnModal} onPress={closeM}>
                <Text style={styles.closeModal} >Back</Text>
               </TouchableOpacity>
               <TouchableOpacity style={[styles.btnModal, styles.btnSave]} activeOpacity={0.6} onPress={savePass}>
                <Text style={styles.textSave}>Save</Text>
               </TouchableOpacity>
                 </View>
            </View>

           
        </View>
        
        </>
    )
}

const styles = StyleSheet.create({
   container: {
    flex:1,
    backgroundColor:"rgba(24,24,24,0.6)",
    alignItems:"center",
    justifyContent:"center",
   },
   modalCont: {
      backgroundColor:"#fff",
      width:"85%",
      paddingVertical:40,
      alignItems:"center",
      borderRadius:20,
      
   },
   textModal: {
    fontSize:24,
    fontWeight:"600",
    marginBottom:30,
   },
   innerPass:{
    width:"85%",
    alignItems:"center",
    backgroundColor:"#000f",
    padding:6,
    borderRadius:20,
    marginBottom:30,

   },
   textInner: {
    color:"#fff",
    fontWeight:"bold",
    fontSize:20,
    
   },
   btnArea: {
      flexDirection:"row",
      width:"85%",
      alignItems:"center",
      justifyContent:"space-between",
      marginTop:20,
      gap:2,
   },
   btnModal: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    padding:10,
    
   },
   btnSave: {
    backgroundColor:'black',
    borderRadius:20,
    
   },
   textSave: {
    color:"#fff",
    fontSize:18,
   },
   closeModal: {
    fontSize:18,
   }

})