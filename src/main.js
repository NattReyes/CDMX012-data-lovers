import data from './data/ghibli/ghibli.js';
/*import { example, drawElement } from './data.js';*/
import { filterItems } from './data.js';

//console.log(example, data);

/*const allDataFilm = data.films;
const root = document.getElementById('root');
for(let i=0; i<=allDataFilm.length; i++){
    root.innerHTML += drawElement(allDataFilm[i]);
  }*/

  /*Cambiar de pestanas*/
  document.getElementById("films").addEventListener("click", ()=>{
    document.getElementById("windowFilm").style.display="";
    document.getElementById("windowPeople").style.display="none";
    document.getElementById("windowLocations").style.display="none";})

  document.getElementById("personajes").addEventListener("click", ()=>{
    document.getElementById("windowFilm").style.display="none";
    document.getElementById("windowLocations").style.display="none";
    document.getElementById("windowPeople").style.display="flex";
  })

  document.getElementById("locations").addEventListener("click", ()=>{
    document.getElementById("windowFilm").style.display="none";
    document.getElementById("windowPeople").style.display="none";
    document.getElementById("windowLocations").style.display="flex";})

  let films = [];
films = data.films;

/*Pestaña de peliculas*/
document.getElementById("windowPeople").style.display="none";
document.getElementById("windowLocations").style.display="none";
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
      <p1><b>${film.title} </b></p1></br>
      <p2><b>Score:</b> ${film.rt_score}</p2> </br>
      <p3><b>Año:</b> ${film.release_date}</p3> </br>
      </ul>
      </div>
      <div class="backCard">
      <ul>
         <p4>${film.description}</p4></br>
        <p5><b>Productor:</b> ${film.producer}</p5></br>
        <p6><b>Director: </b>${film.director}</p6>
      </ul>
      </div>
  </div>`;
   createElement.innerHTML= containerFilm
   windowFilm.appendChild(createElement);
   return containerFilm;
  })
  }
  filmoItems(films);
  
/*Pestaña de personajes*/
  let windowPeople = document.getElementById ('windowPeople');
  function peopleItems (films) {
    films.forEach((film) => {    
      const createElement= document.createElement("div")
      createElement.setAttribute("class", 'contenedorCardPeople');

      const containerPeople= `<div id= "divCardPeople">
      <div class="frontCard1">
      
      <div class="box2"><img src= ${film.img} id ="imgPosterPeople"></div> 
      <h4><b>${film.name} </b></h4>
      </div>
      <div class="backCard1">
      <ul>
      <p7><b>Genero: </b>${film.gender}</p7></br>
      <p8><b>Color de Ojos:</b> ${film.eye_color}</p8></br>
      <p9><b>Color de Cabello: </b>${film.hair_color}</p9></br>
      <p10><b>Especie:</b> ${film.specie}</p10>     
    </ul>
    </div>
    </div>`;
    createElement.innerHTML= containerPeople;
    windowPeople.appendChild(createElement);
    return containerPeople;
    });
    }
    peopleItems(filterItems("people", films).flat(1));

    /*Pestaña de ubicaciones*/
  let windowLocations = document.getElementById ('windowLocations');
  windowLocations.innerHTML='Hola';

/*Filtro personajes*/
