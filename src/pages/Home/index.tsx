import { useState } from "react";
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"
//componnets
import AddMoney from "../../components/AddMoney";

function Home(){

    // array
    const [extrats, setExtrats] = useState([
        {
            id: 1,
            value: 254.97,
            active: false
        },
        {
            id: 2,
            value: 3547.95,
            active: true
        },
        {
            id: 3,
            value: 574.97,
            active: false
        }
    ])
    let soma = 0

    const [addMoney, setAddMoney] = useState(false)
    const [removeMoney, setRemoveMoney] = useState(false)
    const [valueActive, setValueActive] = useState<string>('')

    const handleAddMoney = () => {
        extrats.push({id: extrats.length + 1, value: Number(valueActive), active: true})
        setAddMoney(!addMoney)
    }
    const handleRemoveMoney = () => {
        extrats.push({id: extrats.length + 1, value: Number(valueActive), active: false})
        setRemoveMoney(!removeMoney)
    }

    // entradas 
    const entradas = extrats.reduce((total, currentIten) => currentIten.value && total + total + currentIten.value, 0)

    return (
        <ScrollView>
            <View style={styles.container}>
                {addMoney && //Add Money
                    <View style={styles.containerAddMoney}>
                        <Text style={styles.titleAddMoney}>Adicionar Ativos</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='R$ 1.250,99'
                            keyboardType='numeric'
                            onChangeText={setValueActive}
                        />
                        <TouchableOpacity style={styles.button} onPress={handleAddMoney}>
                            <Text style={styles.textButton}>Adicionar</Text>
                        </TouchableOpacity>
                  </View>
                }
                {removeMoney && //Remove Money
                    <View style={styles.containerAddMoney}>
                        <Text style={styles.titleAddMoney}>Adicionra Saida</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='R$ 1.250,99'
                            keyboardType='numeric'
                            onChangeText={setValueActive}
                        />
                        <TouchableOpacity style={styles.buttonRed} onPress={handleRemoveMoney}>
                            <Text style={styles.textButton}>Adicionar</Text>
                        </TouchableOpacity>
                  </View>
                }
                <View style={styles.header}>
                    <Text style={styles.title}>My Balance</Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.headerCardContainer}>
                        <Text style={styles.titleCard}>ENTRADA</Text>
                        <TouchableOpacity onPress={() => setAddMoney(!addMoney)}>
                            <Ionicons name="add-circle" size={24} color="#007571" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.priceCard}>R$ {entradas}</Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.headerCardContainer}>
                        <Text style={styles.titleCardRed}>SAIDA</Text>
                        <TouchableOpacity onPress={() => setRemoveMoney(!removeMoney)}>
                            <Ionicons name="add-circle" size={24} color="red" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.priceCard}>R$</Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.headerCardContainer}>
                        <Text style={styles.titleCardBlue}>TOTAL</Text>
                    </View>
                    <Text style={styles.priceCard}>R$</Text>
                </View>

            </View>

            <View style={styles.extratos}>
                <View style={styles.extratosHeader}>
                    <Text>Valor</Text>
                    <Text>Tipo</Text>
                </View>
                {extrats && extrats.map(itens => (
                    <TouchableOpacity 
                        style={styles.extratosInfo} 
                        onPress={() => alert(`${itens.active ? 'Entrada' : 'Saida'} de R$ ${itens.value}`)} 
                        key={itens.id}
                    >
                        <Text>R$ {itens.value}</Text>
                        <Entypo name={itens.active ? "circle-with-plus" : "circle-with-minus"} size={24} color={itens.active ? "#007571" : "red"} />
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}
export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    header: {
        width: "100%",
        height: 100,
        backgroundColor: "#00827e",
        alignItems: "center",
    },
    title: {
        color: "#fff",
        fontSize: 20,
        marginTop: 20,
        borderBottomWidth: 2,
        paddingBottom: 5,
        borderBottomColor: "#00ada8"
    },
    card: {
        width: "80%",
        height: 100,
        marginBottom: 40,
        backgroundColor: "#fff",
        marginTop: -30,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#ccc"
    },
    headerCardContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    titleCard: {
        fontSize: 20,
        color: "#007571",
    },
    titleCardRed: {
        fontSize: 20,
        color: "red",
    },
    titleCardBlue: {
        fontSize: 20,
        color: "blue",
    },
    priceCard: {
        textAlign: "center",
        marginTop: 7,
        fontSize: 25,
        color: 'grey'
    },

    extratos: {
        marginTop: 20,
        marginHorizontal: 10,
        marginBottom: 20,
    },
    extratosHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    extratosInfo:{
        marginTop: 10,
        width: "100%",
        height: 30,
        backgroundColor: "#fff",
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#ccc",
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal: 10,
    },

    // add money
    containerAddMoney: {
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
    titleAddMoney: {
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
    buttonRed:{
        width: "70%",
        backgroundColor: "red",
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