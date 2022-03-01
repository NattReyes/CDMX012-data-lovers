import data from './data/ghibli/ghibli.js';
/*import { example, drawElement } from './data.js';*/
import { filterItems } from './data.js';
import { filterDirectors } from './data.js';
import { filterProducers } from './data.js'
/*import { filterDirector } from './data.js'*/
/*console.log(example, data);*/

/*const allDataFilm = data.films;
const root = document.getElementById('root');
for(let i=0; i<=allDataFilm.length; i++){
    root.innerHTML += drawElement(allDataFilm[i]);
  }*/
  let director = '';
  let films = [];
  films = data.films;
/* data.films.forEach(film => {
  insertHTML += filterItems (film)
}) */

  /*Cambiar de pestanas*/
  
  



  

 

/*Pestaña de peliculas*/
document.getElementById("allFilms").style.display="";
document.getElementById("windowPeople").style.display="none";
/*document.getElementById("windowLocations").style.display="none";*/
let windowFilm = document.getElementById ('windowFilm');
function filmoItems (films){
  films.forEach((film) => {
    const createElement= document.createElement("div")
    createElement.setAttribute("class", 'contenedorCardFilm');
      const containerFilm= 
      `<div id= "divCardFilm">
      <div class="frontCard">
      <div class="box1"><img src= ${film.poster} id ="imgPosterFilm"></div>         
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
    </div>`

   createElement.innerHTML= containerFilm;
    windowFilm.appendChild(createElement);
      return containerFilm;
  })
  }
  filmoItems(films);

  document.getElementById("films").addEventListener("click", ()=>{
    document.getElementById("allFilms").style.display="";
    document.getElementById("windowPeople").style.display="none";
    document.getElementById("windowLocations").style.display="none";})

    

/*Pestaña de personajes*/
document.getElementById("personajes").addEventListener("click", ()=>{
  document.getElementById("allFilms").style.display="none";
  document.getElementById("windowPeople").style.display="flex";
  
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
})

  document.getElementById("personajes").addEventListener("click", ()=>{
    document.getElementById("allFilms").style.display="none";
    document.getElementById("windowLocations").style.display="none";
    document.getElementById("windowPeople").style.display="flex";
  })

//document.getElementById('personajes').removeEventListener("click", e);    

//filtrar directores 
const filterDirector = document.getElementById('filterDir');
filterDirector.addEventListener('change', () => {
  director = document.getElementById('filterDir').value;
  const allFilms = document.getElementById('windowFilm');
  allFilms.innerHTML = '';

   for (let i=0; i<filterDirectors(films, director).length; i++) {
  const directorsResult = ` <div class="box1">
  <img src= ${filterDirectors(films, director)[i].poster} id ="imgPosterFilm"></div> 
  <div class = "containerTextFilm">
    <ul>
      <p>${filterDirectors(films,director)[i].title} (${filterDirectors(films, director)[i].release_date})</p>
      <p>Score: ${filterDirectors(films,director)[i].rt_score}</p>
    </ul>
  </div>
`;
  allFilms.innerHTML += directorsResult

}
console.log(allFilms)

    })

    //filtrar productores
    let producer = '';
    const filterProducer = document.getElementById('filterProd');
filterProducer.addEventListener('change', () => {
  producer = document.getElementById('filterProd').value;
  const allProducers = document.getElementById('windowFilm'); //windowfilm(?)
  allProducers.innerHTML = '';

   for (let i=0; i<filterProducers(films, producer).length; i++) {
  const producerResult = ` <div class="box1">
  <img src= ${filterProducers(films, producer)[i].poster} id ="imgPosterFilm"></div> 
  <div class = "containerTextFilm">
    <ul>
      <p>${filterProducers(films, producer)[i].title} (${filterProducers(films, producer)[i].release_date})</p>
      <p>Score: ${filterProducers(films, producer)[i].rt_score}</p>
    </ul>
  </div>`;
  allProducers.innerHTML += producerResult

   } 
  })

  //pestaña películas

  
  



  //Pestaña de ubicaciones 
  const btnLocations = document.getElementById('ubicaciones');
  btnLocations.addEventListener("click", () => {
  document.getElementById("allFilms").style.display="none";
    document.getElementById("windowPeople").style.display="none";
    document.getElementById("windowLocations").style.display="";

 /*const input = document.querySelectorAll("input");
  input.forEach(input => {
    input.addEventListener("click", films => {
      input.removeEventListener("click", films, true)
    })
  }) */
  
  const windowLocations = document.getElementById("windowLocations");
      function locationsItems (films) {
        films.forEach((film) => {
          const createLocationsCards = document.createElement("div");
          createLocationsCards.setAttribute("class", 'containerCardLocations')

        const locationContainer = `<div id="divCardLocation">
        <div class="frontCard2">
        <div class="box3"><img src=${film.img} id="imgPosterLocations"></div>
                <p>${film.name}</p>
            </div>
          <div class="backCard2">
            <ul>
              <p><b>Clima:</b>${film.climate}</p>
              <p><b>Terreno:</b>${film.terrain}</p>
              <p><b>Agua superficial:</b>${film.surface_water}</p>
            </ul>
          </div>
        </div>
        `;

        createLocationsCards.innerHTML = locationContainer;
        windowLocations.appendChild(createLocationsCards);
        return locationContainer;
      });
    }
  
    locationsItems(filterItems("locations", films).flat());
    locationsItems(filterItems("vehicles", films).flat());
  })
  //btnLocations.removeEventListener("click").style.display="none";*/

  document.getElementById("locations").addEventListener("click", ()=>{
    
    document.getElementById("allFilms").style.display="none";
    document.getElementById("windowPeople").style.display="none";
    document.getElementById("windowLocations").style.display="flex";})

    /*Pestaña de ubicaciones*/
 
 

/*Filtro personajes*/

