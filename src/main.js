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
      const containerFilm= 
      `<div id= "divCardFilm">
      <div class="frontCard">
      <div class="box1">
      <img src= ${film.poster} id ="imgPosterFilm"></div> 
      <ul>
      <li>Titulo: ${film.title} </li>
      <li>Score: ${film.rt_score}</li>
      <li>Año: ${film.release_date}</li> 
      </ul>
      </div>
      
      <div class = "backCard">
      <ul>
         <li>Descripción: ${film.description}</li>
        <li>Productor: ${film.producer}</li>
        <li>Director ${film.director}</li>
    
  </ul>
  </div>
  </div>`;
 
     
   createElement.innerHTML= containerFilm
   windowFilm.appendChild(createElement);
   return containerFilm;
  })
  }
  filmoItems(films);
  
  
 
document.getElementById("personajes").addEventListener("click", ()=>{
  document.getElementById("windowFilm").style.display="none";
  


  let windowPeople = document.getElementById ('windowPeople');
  function peopleItems (films) {
    films.forEach((film) => {    
      const createElement= document.createElement("div")
      createElement.setAttribute("class", 'contenedorCardPeople');

      const containerPeople= `<div id= "divCardPeople">
      <div class="frontCard1">
      
      <div class="box2"><img src= ${film.img} id ="imgPosterPeople"></div> 
      <h4>${film.name} </h4>
      </div>
      <div class="backCard1">
      <ul>
      <p7>Genero: ${film.gender}</p7>
      <p8>Color de Ojos: ${film.eye_color}</p8>
      <p9>Color de Cabello: ${film.hair_color}</p9>
      <p10>Especie: ${film.specie}</p10>     
    </ul>
    </div>
    </div>`;


     
    createElement.innerHTML= containerPeople;
    windowPeople.appendChild(createElement);
    return containerPeople;
    });
    }
    
    peopleItems(filterItems("people", films).flat(1));
    
  })

  document.getElementById("locations").addEventListener("click", ()=>{
    document.getElementById("windowFilm").style.display="none";
    document.getElementById("windowPeople").style.display="none";})