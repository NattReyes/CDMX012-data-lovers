export function filterItems(film, newArray){
  if(film === ""){
    return[];
  }
    let arrayItems= newArray.map((films) => films[film])
      return arrayItems;
}

  //función para filtrar directores
export const filterDirectors = (films, director) => {
  const containsDirectors = films.filter(films => films.director == director)  
    return containsDirectors;
}
  
//función para filtrar productores
  export function filterProducers (films, producer) {
    const containsProducers = films.filter((films) => films.producer == producer);
      return containsProducers;
  }

//función para ordenamiento 
export const alphOrder = (order, films) => {
  return films.sort(function(a, b) {
    if(order === 'abc'){
      if (a.title > b.title) {
        return 1;
      } if (a.title < b.title) {
        return -1;
      }
        return 0;
  }else {
          if (a.title > b.title) {
          return -1;
        } if (a.title < b.title) {
            return 1;
        } return 0;
  }
  })  
}
