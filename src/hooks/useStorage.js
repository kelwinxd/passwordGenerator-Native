import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  const getItem = async (key) => {
    try {
        const passwords = await AsyncStorage.getItem(key)
        return JSON.parse(passwords) || [];

    } catch (error) {
        console.log("Erro ao getItem", error)
        return []
    }

  }

  const saveItem = async (key, value) => {
    try {
        let passwords = await getItem(key)
        passwords.push(value)
        await AsyncStorage.setItem(key,JSON.stringify(passwords))
        
    } catch (error) {
        console.log("erro ao salvar", error)
    }
  }

  const remItem = async (key,item) => {
    try {
        let passwords = await getItem(key)

        let myPasswords = passwords.filter((passwords) => {
            return (passwords !== item)
        })

        await AsyncStorage.setItem(key,JSON.stringify(myPasswords))
        return myPasswords;
        
    } catch (error) {
        console.log("error ao deletar", error)
    }
  }

  return {
    getItem,
    saveItem,
    remItem,
  }

}

export default useStorage;