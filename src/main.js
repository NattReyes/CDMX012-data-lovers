import { example, drawElement } from './data.js';
import data from './data/ghibli/ghibli.js';
//console.log(example, data);

const allDataFilm = data.films;
const root = document.getElementById('root');
for(let i=0; i<=allDataFilm.length; i++){
    root.innerHTML += drawElement(allDataFilm[i]);
  }



