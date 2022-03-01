 /* export const drawElement = (film) => {
    return `<section id="card">
    <img src="${film.poster}" alt="">
  </section>`
  
  };*/
export const filterItems = (film, newArray) => {
  if(film === ""){
    return[];
  }
  let arrayItems= newArray.map((films) => films[film])
  console.log(arrayItems);
  return arrayItems;
};
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
//console.log(containsDirectors)
return containsDirectors;
}
  //función para filtrar productores
export const filterProducers = (films, producer) => {
  const containsProducers =films.filter((films) => films.producer == producer)

  return containsProducers;
}




export function filterPeople(film) {
 let filterPeople= filterItems.filter(film.gender='male');
 console.log(filterPeople);
}   