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


export function filterPeople(film) {
 let filterPeople= filterItems.filter(film.gender='male');
 console.log(filterPeople);
}   