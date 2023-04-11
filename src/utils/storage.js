import AsyncStorage from '@react-native-async-storage/async-storage';

export function transformData(doc) {
    const id = doc.id;
    const data = doc;
    const { cover, ingredients, instructions, name, time, total_ingredients, video } = data;
  
    const transformedData = {
      id: id,
      cover: cover || '',
      name: name || '',
      time: time || 0,
      total_ingredients: total_ingredients || 0,
      video: video || '',
      ingredients: Object.entries(ingredients || {}).map(([title, amount]) => ({ title, amount })),
      instructions: instructions || [],
    };
  
    return transformedData;
}

export async function getFavorites(key){
    const favorites = await AsyncStorage.getItem(key)
    return JSON.parse(favorites) || [];
}
export async function saveFavorite(key, newItem){
    let myFavorites = await getFavorites(key);

    let transformedItem = transformData(newItem);

    let hasItem = myFavorites.some( item => item.name === transformedItem.name )

    if(hasItem){
        console.log("Esse item já está salvo");
        return;
    }
    myFavorites.push(transformedItem)

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
    console.log("Salvo com sucesso");
}
export async function removeFavorite(receipeName){
    let receipes = await getFavorites('@applarica')

    let myFavorites = receipes.filter( item => {
        return (item.name !== receipeName)
    })

    await AsyncStorage.setItem('@applarica', JSON.stringify(myFavorites));
    console.log("ITEM DELETADO COM SUCESSO")
    return myFavorites;
}
export async function isFavorite(receipe){
    let myReceipes = await getFavorites('@applarica')
    let transformedItem = transformData(receipe);
    const favorite = myReceipes.find( item => item.name === transformedItem.name )

    if(favorite){
        return true;
    }

    return false;
}