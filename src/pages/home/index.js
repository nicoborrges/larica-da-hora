import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity,
    FlatList, ActivityIndicator,
} from "react-native";
import { Logo } from "../../components/logo";
import { collection, doc, getDocs, query} from "firebase/firestore/lite";
import {Ionicons} from '@expo/vector-icons';
import { useState, useEffect } from "react";
import db from "../../config/firebase";
import { FoodList } from "../../components/foodlist";

export function Home(){

    const [receitas, setReceitas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [inputValue, setInputValue] = useState('');

    function handleSearch(){
        console.log(inputValue);
    }
    
    useEffect(() => {
        const fetchReceitas = async () => {
          setLoading(true);
          try {
            console.log('request iniciado');
            console.log(new Date());
            const querySnapshot = await getDocs(collection(db, 'receitas'));
            const docs = querySnapshot.docs.map((doc) => doc.data());
            setReceitas(docs);
            setLoading(false);
          } catch (e) {
            console.log(e);
            setError(true);
            setLoading(false);
          }
        };
      
        fetchReceitas();
      }, []);

      const renderError = () => (
        <View style={styles.loadingContainer}>
          <Text>Ocorreu um erro ao carregar as receitas.</Text>
        </View>
      );

      return (
        <SafeAreaView style={styles.container}>
          {loading ? (
            <ActivityIndicator style={styles.loadingScreen} size="large" color="#0000ff" />
          ) : error ? (
            renderError()
          ) : (
            <>
              <Logo />
              <Text style={styles.title}>Encontre a receita</Text>
              <Text style={styles.title}>para salvar sua larica</Text>
      
              <View style={styles.form}>
                <TextInput 
                  placeholder="Digite o nome da comida"
                  style={styles.input}
                  value={inputValue}
                  onChangeText={(text) => setInputValue(text)}
                />
                <TouchableOpacity onPress={handleSearch}>
                  <Ionicons name='search' size={28} color='#4cbe6c' />
                </TouchableOpacity>
              </View>
      
              <FlatList
                data={receitas}
                keyExtractor={(item) => String(item.id)}
                renderItem={ ({item}) =>  <FoodList data={item}/>}
              />
            </>
          )}
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#f3f9ff',
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14,
    },
    title:{
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0e0e0e',
    }, 
    form:{
        backgroundColor: '#fff',
        width:'100%',
        borderRadius:8,
        marginTop:16,
        marginBottom:16,
        borderWidth:1,
        borderColor: '#ececec',
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }, 
    input:{
        width: '90%',
        height: 54,
        maxWidth: '90%',
    },  
    loadingScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})