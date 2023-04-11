const myFavorites = [];

export function getFavoritesList(){
    return myFavorites;
}

export function addFavoritesList(id){
    myFavorites.push(id);
}
export function removeFavoritesList(id){
    let index = myFavorites.indexOf(id);
    if (index > -1) {
        myFavorites.splice(index, 1);
    }
}

export function isFavorite(id){
    return myFavorites.includes(id);
}