import { View, Text, StyleSheet } from "react-native";

function Details({tipe = false}){
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>{tipe ? "ENTRADA" : 'SAIDA'}</Text>
            </View>
            
        </View>
    )
}
export default Details

const styles = StyleSheet.create({
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
})