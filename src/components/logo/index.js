import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export function Logo(){
    return(
        <View>
            <LinearGradient 
            style={styles.logoArea}
            colors={['#ff2b2b', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee']}
            >
                <Text style={styles.logo}>Larica da Hora</Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    logoArea:{
        background: 'linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff)',
        alignSelf: 'flex-start',
        padding: 8,
        paddingLeft: 16,
        paddingRight: 20,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 32,
        marginBottom: 8,
    },
    logo:{
        fontSize: 18,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        color: '#fff',
    }
})