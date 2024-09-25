import {View, Text, StyleSheet, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useIsFocused} from '@react-navigation/native'
import { useState, useEffect } from 'react'
import useStorage from '../../hooks/useStorage'
import {PassItem} from './components/passItem'


export function Passwords(){

   const [listPass, setListPass] = useState([])
   const focused = useIsFocused()
   const {getItem, remItem} = useStorage()
    
   useEffect(() => {
       async function loadPass(){
        const passwords = await getItem("@passw")
        setListPass(passwords)

        console.log(passwords)
       }  
    
    loadPass()
    }, [focused])

    async function removePass(item){
        
       const passwords = await remItem("@passw", item)
       setListPass(passwords)
    }

    return (
        <>
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.text}>My Passwords</Text>
            </View>
           <View style={styles.passList}>
           <FlatList
            data={listPass}
            keyExtractor={(item) => String(item)}
            renderItem={({item}) => <PassItem data={item} remItem={() => removePass(item)}/>}
            >

            </FlatList>

           </View>
           
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
       paddingTop:58,
       paddingBottom:14,
       paddingLeft:14,
       backgroundColor:"#ffe81a"
    },
    text: {
        fontSize:21,
        fontWeight:'bold',
    },
    passList: {
        paddingLeft:14,
        paddingRight:14,
        paddingTop: 24,
        alignItems:"center"
    }
})