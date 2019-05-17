/*Declarar variables globales*/
const urlOmdb = "http://www.omdbapi.com/?apikey=9a3646ed&type=movie";




/*Utilización de fetch*/
fetch (urlOmdb)
 .then((success) => { success.json() ; console.log(success.json()); } )
 .then((movies) => {console.log(urlOmdb);  console.log(Object.values(movies)) } )
 .catch((error)=>{ console.log(error)});
 