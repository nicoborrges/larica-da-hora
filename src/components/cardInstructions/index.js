import {View, Text, StyleSheet} from 'react-native';

export function CardInstructions({data}) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{data.index+1}- </Text>
            <Text style={styles.text}>{data.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:8,
        marginRight:14,
        marginBottom:14,
    },
    name:{
        fontWeight:'bold',
        fontSize:18,
    }, 
    text:{
        lineHeight:20,
    }
})