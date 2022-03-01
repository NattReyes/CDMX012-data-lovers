import data from './data/ghibli/ghibli.js';
/*import { example, drawElement } from './data.js';*/
import { filterItems } from './data.js';
import { filterDirectors } from './data.js';
import { filterProducers } from './data.js'
//import { filterDirector } from './data.js'
//console.log(example, data);

/*const allDataFilm = data.films;
const root = document.getElementById('root');
for(let i=0; i<=allDataFilm.length; i++){
    root.innerHTML += drawElement(allDataFilm[i]);
  }*/
 let films = [];
  films = data.films;
  let director = '';
// data.films.forEach(film => {
  //insertHTML += filterItems (film)
//})

//pestaña películas
let windowFilm = document.getElementById ('windowFilm');
function filmoItems (films){
  films.forEach((film) => {
    const createElement= document.createElement("div")
    createElement.setAttribute("class", 'contenedorCardFilm');
      const containerFilm= ` <div class="box1">
      <img src= ${film.poster} id ="imgPosterFilm"></div> 
        <div class="containerTextFilm">
          <ul>
            <p>${film.title} (${film.release_date})</p>
            <p>Score: ${film.rt_score}</p>
          </ul>
        </div>`;
   createElement.innerHTML= containerFilm
    windowFilm.appendChild(createElement);
      return containerFilm;
  } )
  }
  filmoItems(films);

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

  
 //Pestaña de personajes
  document.getElementById("personajes").addEventListener("click", ()=>{
  document.getElementById("windowFilm").style.display="none";

  let windowPeople = document.getElementById ('windowPeople');
  function peopleItems (films) {
    films.forEach((film) => {    
      const createElement= document.createElement("div")
      createElement.setAttribute("class", 'contenedorCardPeople');

      const containerPeople= `<div class="box2">
      <img src= ${film.img} id ="imgPosterPeople"></div> 
      <div class = "containerTextPeople">
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
  //document.getElementById('personajes').removeEventListener("click", e);


  //Pestaña de ubicaciones 
  /*const btnLocations = document.getElementById('ubicaciones');
  btnLocations.addEventListener("click", () => {
  document.getElementById('windowPeople').style.display='none';
 /* const input = document.querySelectorAll("input");
  input.forEach(input => {
    input.addEventListener("click", films => {
      input.removeEventListener("click", films, true)
    })
  }) const windowLocations = document.getElementById("windowLocations");
      function locationsItems (films) {
        films.forEach((film) => {
          const createLocationsCards = document.createElement("div");
          createLocationsCards.setAttribute("class", 'containLocations')

        const locationContainer = `<div id="divCardLocation">
        <div class="box3"><img src=${film.img} id="imgPosterLocations"></div>
          <div class="frontCardL">
            <div class="textLocations">
                <p>${film.name}</p>
            </div>
          <div class="backCardL">
            <ul>
              <p>${film.climate}</p>
              <p>${film.terrain}</p>
              <p>${film.surface_water}</p>
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

