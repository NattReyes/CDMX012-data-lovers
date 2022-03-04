import data from './data/ghibli/ghibli.js';
import {  filterItems } from './data.js';
import { filterDirectors } from './data.js'
import { filterProducers, alphOrder } from './data.js'

  let director = '';
  let films = [];
  films = data.films;

/*Pestaña de peliculas*/
document.getElementById("allFilms").style.display="";
document.getElementById("allPeople").style.display="none";
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
          <p><b>${film.title} </b></p>
          <p><b>Score:</b> ${film.rt_score}</p>
          <p><b>Release date:</b> ${film.release_date}</p>
        </ul>
      </div>
        <div class="backCard">
          <ul>
            <p>${film.description}</p>
            <p><b>Producer:</b> ${film.producer}</p>
            <p><b>Director:</b>${film.director}</p>
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
    document.getElementById("allPeople").style.display="none";
    document.getElementById("windowLocations").style.display="none";})

/*Pestaña de personajes*/
document.getElementById("personajes").addEventListener("click", ()=>{
  document.getElementById("allFilms").style.display="none";
  document.getElementById("allPeople").style.display="";
  document.getElementById("windowPeople").style.display="flex";
  document.getElementById("windowLocations").style.display="none";
  
  let windowPeople = document.getElementById ('windowPeople');
    function peopleItems (films) {
    films.forEach((film) => {    
      const createElement= document.createElement("div")
      createElement.setAttribute("class", 'contenedorCardPeople');

    const containerPeople= `<div id= "divCardPeople">
    <div class="frontCard1">
      <div class="box2"><img src= ${film.img} id ="imgPosterPeople">
    </div> 
        <h4><b>${film.name} </b></h4>
      </div>
        <div class="backCard1">
          <ul>
            <p><b>Gender:</b>${film.gender}</p>
            <p><b>Eye color:</b> ${film.eye_color}</p>
            <p><b>Hair color:</b>${film.hair_color}</p>
            <p><b>Specie:</b>${film.specie}</p>     
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
    document.getElementById("allPeople").style.display="";
    document.getElementById("windowPeople").style.display="flex";
  })

//filtro directores
  const filterDirector = document.getElementById('filterDir');
    filterDirector.addEventListener('change', () => {
      director = document.getElementById('filterDir').value;
  const allFilms = document.getElementById('windowFilm');
    allFilms.innerHTML = '';

   for (let i=0; i<filterDirectors(films, director).length; i++) {
      const directorsResult = `<div id= "divCardFilm">
        <div class="frontCard">
          <div class="box1"><img src= ${filterDirectors(films, director)[i].poster} id ="imgPosterFilm"></div>         
            <ul>
              <p><b>${filterDirectors(films,director)[i].title} </b></p>
              <p><b>Score:</b> ${filterDirectors(films,director)[i].rt_score}</p> 
              <p><b>Release date:</b> ${filterDirectors(films, director)[i].release_date}</p> 
            </ul>
          </div>
            <div class="backCard">
              <ul>
                <p>${filterDirectors(films, director)[i].description}</p>
                <p><b>Producer:</b> ${filterDirectors(films, director)[i].producer}</p>
                <p><b>Director:</b>${filterDirectors(films, director)[i].director}</p>
              </ul>
            </div>
        </div>
`;
  allFilms.innerHTML += directorsResult
}
    })
    
//filtrar productores
let producer = '';
  const filterProducer = document.getElementById('filterProd');
    filterProducer.addEventListener('change', () => {
      producer = document.getElementById('filterProd').value;
        const allProducers = document.getElementById('windowFilm'); 
        allProducers.innerHTML = '';

for (let i=0; i<filterProducers(films, producer).length; i++) {
  const producerResult = ` <div id= "divCardFilm">
    <div class="frontCard">
      <div class="box1"><img src= ${filterProducers(films, producer)[i].poster} id ="imgPosterFilm"></div>         
        <ul>
          <p><b>${filterProducers(films,producer)[i].title} </b></p>
          <p><b>Score:</b> ${filterProducers(films,producer)[i].rt_score}</p>
          <p><b>Release date:</b> ${filterProducers(films, producer)[i].release_date}</p>
        </ul>
      </div>
        <div class="backCard">
          <ul>
            <p>${filterProducers(films, producer)[i].description}</p>
            <p><b>Producer:</b> ${filterProducers(films, producer)[i].producer}</p>
            <p><b>Director:</b>${filterProducers(films, producer)[i].director}</p>
          </ul>
        </div>
      </div>`;
allProducers.innerHTML += producerResult
} 
})

  //Pestaña de ubicaciones 
  const btnLocations = document.getElementById('ubicaciones');
    btnLocations.addEventListener("click", () => {
      document.getElementById("allFilms").style.display="none";
      document.getElementById("allPeople").style.display="none";
      document.getElementById("windowLocations").style.display="";

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
                  <p><b>Climate:</b>${film.climate}</p>
                  <p><b>Terrain:</b>${film.terrain}</p>
                  <p><b>Surface water:</b>${film.surface_water}</p>
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

  document.getElementById("ubicaciones").addEventListener("click", ()=>{
    
    document.getElementById("allFilms").style.display="none";
    document.getElementById("allPeople").style.display="none";
    document.getElementById("windowLocations").style.display="flex";
  }) 
 
// ordenamiento 
document.querySelector('#order').addEventListener('change', (e) => {
  let orderTitles = alphOrder(e.target.value, films);
    let getFilms = document.getElementById('windowFilm');
      getFilms.innerHTML = '';
        orderTitles.forEach(title => {
          const producerResult = ` <div id= "divCardFilm">
            <div class="frontCard">
              <div class="box1"><img src= ${title.poster} id ="imgPosterFilm"></div>         
                <ul>
                  <p><b>${title.title} </b></p>
                  <p><b>Score:</b> ${title.rt_score}</p>
                  <p><b>Release date:</b> ${title.release_date}</p>
                </ul>
              </div>
                <div class="backCard">
                  <ul>
                    <p>${title.description}</p>
                    <p><b>Producer:</b> ${title.producer}</p>
                    <p><b>Director:</b>${title.director}</p>
                  </ul>
                </div>
            </div>`;
    
    getFilms.innerHTML += producerResult; 
  })  
})
