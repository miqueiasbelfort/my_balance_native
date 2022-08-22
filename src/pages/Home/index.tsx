import {View, Text, StyleSheet} from "react-native"

function Home(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>My Balance</Text>
            </View>
            <View style={styles.card}>

            </View>
            <View style={styles.card}>

            </View>
            <View style={styles.card}>

            </View>
        </View>
    )
}
export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#dfdfdf",
        overflow: "scroll",
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
        height: 200,
        marginBottom: 40,
        backgroundColor: "#fff",
        marginTop: -30,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#ccc"
    }
})