import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, {Dispatch, SetStateAction, useState} from 'react'

interface IAddMoney {
    addmoney: boolean,
    setAddMoney?: Dispatch<SetStateAction<boolean>>,
    setValue?: Dispatch<SetStateAction<number>>,
    addInList?: () => void,
}

export default function AddMoney({addmoney, setAddMoney, setValue, addInList}: IAddMoney) {

    const [valueinput, setValueInput] = useState<number | null>(null)

    const handleAddMoney = () => {
        setAddMoney(false)
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Ativos</Text>
      <TextInput
        style={styles.input}
        placeholder='R$ 1.250,99'
        keyboardType='numeric'
        onChangeText={setValue}
      />
    <TouchableOpacity style={styles.button} onPress={handleAddMoney}>
        <Text style={styles.textButton}>Adicionar</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        backgroundColor: "#fff",
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "#ccc",
        position: "absolute",
        zIndex: 999,
        top: "50%",
        left: "50%",
        transform: [
            {translateY: -50},
            {translateX: -100}
        ],
        padding: 10,
        flexDirection: "column",
        alignItems: "center",
    },
    title: {
        fontSize: 19,
        textAlign: "center",
        color: "#007571",
    },
    input: {
        marginTop: 20,
        width: "100%",
        padding: 10,
        borderBottomWidth: 2,
        borderColor: "#007571",
        backgroundColor: "#ececec",
        borderTopRightRadius: 7,
        borderTopLeftRadius: 7,
    },
    button: {
        width: "70%",
        backgroundColor: "#007571",
        borderRadius: 7,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginTop: 20,
    },
    textButton: {
        textAlign: "center",
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
    }
})