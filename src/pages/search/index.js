import { View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import db from "../../config/firebase";
import { collection, doc, getDocs, query} from "firebase/firestore/lite";
import { FoodList } from "../../components/foodlist";

export function Search(){

    const route = useRoute();

    const [searched, setSearched] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchSearched = async () => {
          setLoading(true);
          try {
            console.log('request iniciado');
            console.log(new Date());
            const querySnapshot = await getDocs(collection(db, 'receitas'));
            const docs = querySnapshot.docs.filter(doc => doc.data().name.includes(route.params?.nameReceipe)).map(doc => doc.data());
            setSearched(docs);
            setLoading(false);
          } catch (e) {
            console.log(e);
            setError(true);
            setLoading(false);
          }
        };
        
        fetchSearched();
      }, [route.params?.nameReceipe]);
          
      
      const renderError = () => (
        <View style={styles.loadingContainer}>
          <Text>Ocorreu um erro ao carregar as receitas.</Text>
        </View>
      );

    return(
        <SafeAreaView style={styles.container}>
                      {loading ? (
            <ActivityIndicator style={styles.loadingScreen} size="large" color="#0000ff" />
          ) : error ? (
            renderError()
          ) : (
            <>

            <FlatList 
              showsVerticalScrollIndicator={false}
              data={searched}
              keyExtractor={(item) => String(item.id)}
              renderItem={ ({ item }) => <FoodList data={item}/>}
              ListEmptyComponent={() => <Text style={styles.text}>Não encontramos a receita que está buscando</Text>}  
            />

            </>
          )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#f3f9ff',
        paddingStart: 14,
        paddingEnd:14,
        paddingTop:14
    }, 
    text:{
        fontSize:16,
    }
})