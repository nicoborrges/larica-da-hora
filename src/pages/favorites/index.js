import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export function Favorites(){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Laricas Favoritas</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f3f9ff',
        paddingStart: 14,
        paddingEnd:14,
        paddingTop:36,
    },
    title:{
        color:'#000',
        fontWeight:'bold',
        fontSize:24,
    }
})