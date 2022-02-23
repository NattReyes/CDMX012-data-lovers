import data from './data/ghibli/ghibli.js';
/*import { example, drawElement } from './data.js';*/
import { filterItems } from './data.js';

//console.log(example, data);

/*const allDataFilm = data.films;
const root = document.getElementById('root');
for(let i=0; i<=allDataFilm.length; i++){
    root.innerHTML += drawElement(allDataFilm[i]);
  }*/

  let films = [];
films = data.films;


let windowFilm = document.getElementById ('windowFilm');
function filmoItems (films){
  films.forEach((film) => {
    const createElement= document.createElement("div")
    createElement.setAttribute("class", 'contenedorCardFilm');
      const containerFilm= ` <div class="box1">
      <img src= ${film.poster} id ="imgPosterFilm"></div> 
      <div class = "conteinerTextFilm">
      <ul>
     <li>${film.title} </li>
     <li>Score: ${film.rt_score}</li>
     <li>Año: ${film.release_date}</li>
  </ul>
  </div>
  `;
   createElement.innerHTML= containerFilm
   windowFilm.appendChild(createElement);
   return containerFilm;
  } )
  }
  filmoItems(films);
  
 
document.getElementById("personajes").addEventListener("click", ()=>{
  document.getElementById("windowFilm").style.display="none";
  


  let windowPeople = document.getElementById ('windowPeople');
  function peopleItems (films) {
    films.forEach((film) => {    
      const createElement= document.createElement("div")
      createElement.setAttribute("class", 'contenedorCardPeople');

      const containerPeople= ` <div class="box2">
      <img src= ${film.img} id ="imgPosterPeople"></div> 
      <div class = "conteinerTextPeople">
      <ul>
     <li>${film.name} </li>
  </ul>
  </div>
  `;


     
    createElement.innerHTML= containerPeople;
    windowPeople.appendChild(createElement);
    return containerPeople;
    });
    }
    peopleItems(filterItems("people", films).flat(1));
    
  })
