import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export function Search(){
    return(
        <SafeAreaView style={styles.container}>
            <Text>SEARCH PAGE</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'green'
    }
})