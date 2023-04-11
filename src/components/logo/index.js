import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { View as MotiView } from "moti";

export function Logo(){
    return(
        <MotiView
            from={{
            opacity:0,
            translateX: -50,
            }}
            animate={{
            opacity:1,
            translateX: 0,
            }}
            transition={{
            type:'spring',
            duration: 850
            }}
        >
            <LinearGradient 
            style={styles.logoArea}
            colors={['#020024', '#097932', '#00ffa6']}
            >
                <Text style={styles.logo}>Larica da Hora</Text>
            </LinearGradient>
        </MotiView>
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