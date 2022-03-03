 /* export const drawElement = (film) => {
    return `<section id="card">
    <img src="${film.poster}" alt="">
  </section>`
  
  };*/
export function filterItems(film, newArray){
  if(film === ""){
    return[];
  }
  let arrayItems= newArray.map((films) => films[film])
  return arrayItems;

}
  /*export const order = (films) =>{
let abc = films.sort();
console.log(abc);
  }
const order = filterItems.sort();
console.log(order);*/

/*export const filterDirector = films.filter(films => films.director);
let films = [];
//films = data.films;
  //if(films.director === 'Hayao Miyazaki')
  //return 
console.log(filterDirector);*/

  //función para filtrar directores
export const filterDirectors = (films, director) => {
const containsDirectors = films.filter(films => films.director == director)  
console.log(containsDirectors)
return containsDirectors;
}
  //función para filtrar productores
  export function filterProducers (films, producer) {
      const containsProducers = films.filter((films) => films.producer == producer);
      return containsProducers;
    }

/*export function filterGender (_filterItems, gender){
  const containsGender =arrayItems.filter(filterItems=> {
    return filterItems.gender == gender;
  })
console.log(containsGender);
  return containsGender;
}*/


export const filterGender = (personaje,criterio) =>{
  if(criterio == "Género"){
    return personaje;
  }else{
  let personajesFilter = personaje.filter(element => element.gender == criterio);
  return personajesFilter ;
  }
};


/*export function filterGender(arrayItems, gender) {
  return arrayItems.filter(film=>film.gender==gender)*/
/*export const filterPeople = (films, gender) => {
  const containsGenders =films.filter((films) => films.gender == gender)
console.log(containsGenders);
  return containsGenders;
}

/*export function filterGender(films,property){ 
  let sortArray = [];
  for(let i=0; i<films.length;i++){
    sortArray.push(films[i].people)
  }
  const arrayProperty = sortArray.flat(2).filter((films)=> {
  return films.gender === property ;
  });
  
  return arrayProperty;
}*/


/*export function filterPeople(film) {
 let filterPeople= filterItems.filter(film.gender='male');
 console.log(filterPeople);
}*/

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
  })  }
