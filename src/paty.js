
//                   A P L I Q U E  M O S 
// N°4
document.getElementById('aqui').addEventListener('click', () => {

    // en este link es generico no es necesario colocar type en caso que la busqueda sea por id
    // pero recordar que id es solo en caso de eleguir nosotras las peliculas 
    // por busqueda el usuario no colocera el id a menos que realicemos constantes para peliculas y las llamemos a traves del id

    const url = "https://www.omdbapi.com/?&type=movie&apikey=8f338895";
    carruselPelis(url);

});



function carruselPelis(url) {


    let arrIds = ["tt1843866"];
    let arrIds2 = ["tt3501632"];
    let arrIds3 = ["tt4154756"];

    // let posDos = arrIds[1];
    // let  posTres =arrIds[2];
    fetch(url + "&i=" + arrIds)

        .then((response) => (response.json()))

        .then(elemento => {

            
            document.getElementById('moviebox').innerHTML += `<img id ="aa" src="${elemento.Poster}" alt="logo">`
        })


    fetch(url + "&i=" + arrIds2)

        .then((response) => (response.json()))

        .then(elemento => {


            document.getElementById('moviebox').innerHTML += `<img id ="bb" src="${elemento.Poster}" alt="logo">`
        })
    fetch(url + "&i=" + arrIds3)

        .then((response) => (response.json()))

        .then(elemento => {


            document.getElementById('moviebox').innerHTML += `<img id ="cc" src="${elemento.Poster}" alt="logo">`
        })
   
    
}


function carruselPelis2(url) {


    let arrIds = ["tt1843866"];
    let arrIds2 = ["tt3501632"];
    let arrIds3 = ["tt4154756"];

    // let posDos = arrIds[1];
    // let  posTres =arrIds[2];
    fetch(url + "&i=" + arrIds)

        .then((response) => (response.json()))

        .then(elemento => {

            
            document.getElementById('moviebox').innerHTML += `<img id ="aa" src="${elemento.Poster}" alt="logo">`
        })


    
}
// PROBANDO CODIGO

// hola chicas aqui dejare lo que he hecho conel codigo y podran ver como ha sido mi logica para imprimir la 
// informacion en el navegador
// cualquier duda me avisan y lo analizamos por linea de codigo 
// por ejemplo este mensaje ha sido escrito en el archivo : paty.js  en las lineas 4 5 6 y 7



// La url entregada en el proyecto es : http://www.omdbapi.com/

// los parametro entregados por esta API SON: 

//    i	-->		A valid IMDb ID (e.g. tt1285016)
//    t	-->	    Movie title to search for.


//   type	-->    Type of result to return.
//    s	    -->  	Movie title to search for.


//                   O      K 



// obtencion de datos: 
// utilizacion de API y aplicacion de PARAMETROS 

//  ** login en OMBd  obtuve el siguiente link e KEYS

//   link : http://www.omdbapi.com/?i=tt3896198&apikey=8f338895

//   KEYS :8f338895

// E N T O N C E S :

//    apikey=8f338895  ES REQUISITO 
//    i=tt389619    uso de ID 
//    ?   inicio de consulta a la API o intermedaria en base de datos SERVIDOR
//    &   Adicion de parametro 


//     E  J  E  M  P  L  O      de    B  U  S  Q  U  E  D  A 


// N°1

// si se busca por id la busqueda requiere --> id + keys  --> USO : peliculas recomendadas seleccionadas
// y buscadas anteriormente (por nosotras)

// ---------------------- en este caso 
// el link de busqueda por ejemplo : http://www.omdbapi.com/?i=tt0371746&apikey=8f338895 

// se obtiene un objeto JSON -->  {"Title":"Iron Man","Year":"2008","Rated":"PG-13","Released":"02 May 2008","Runtime":"126 min","Genre":"Action, Adventure, Sci-Fi","Director":"Jon Favreau","Writer":"Mark Fergus (screenplay), Hawk Ostby (screenplay), Art Marcum (screenplay), Matt Holloway (screenplay), Stan Lee (characters), Don Heck (characters), Larry Lieber (characters), Jack Kirby (characters)","Actors":"Robert Downey Jr., Terrence Howard, Jeff Bridges, Gwyneth Paltrow","Plot":"After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.","Language":"English, Persian, Urdu, Arabic, Hungarian","Country":"USA, Canada","Awards":"Nominated for 2 Oscars. Another 20 wins & 65 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"79/100"}],"Metascore":"79","imdbRating":"7.9","imdbVotes":"854,168","imdbID":"tt0371746","Type":"movie","DVD":"30 Sep 2008","BoxOffice":"$318,298,180","Production":"Paramount Pictures","Website":"http://www.ironmanmovie.com/","Response":"True"}


//***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************


// N°2

// si se busca por s --> ( MOVIE TITLE ) --> avengers

// el link de busqueda por ejemplo : http://www.omdbapi.com/?s=avengers&apikey=8f338895

// se obtiene un objeto JSON -->      
//                                   {"Search":
//                                               [
//                                                {"Title":"The Avengers","Year":"2012","imdbID":"tt0848228","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},
//                                                {"Title":"Avengers: Age of Ultron","Year":"2015","imdbID":"tt2395427","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"},
//                                                {"Title":"Avengers: Infinity War","Year":"2018","imdbID":"tt4154756","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"},
//                                                {"Title":"Avengers: Endgame","Year":"2019","imdbID":"tt4154796","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"},
//                                                {"Title":"The Avengers","Year":"1998","imdbID":"tt0118661","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"},
//                                                {"Title":"The Avengers: Earth's Mightiest Heroes","Year":"2010–2012","imdbID":"tt1626038","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"},
//                                                {"Title":"Ultimate Avengers","Year":"2006","imdbID":"tt0491703","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDFmZTkxMjktMzRiYS00YzMwLWFhZDctOTQ2N2NlOTAyZDJhXkEyXkFqcGdeQXVyNjgzNDU2ODI@._V1_SX300.jpg"},
//                                                {"Title":"Ultimate Avengers II","Year":"2006","imdbID":"tt0803093","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},
//                                                {"Title":"The Avengers","Year":"1961–1969","imdbID":"tt0054518","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BZWI4ZWM4ZWQtODk1ZC00MzMxLThlZmMtOGFmMTYxZTAwYjc5XkEyXkFqcGdeQXVyMTk0MjQ3Nzk@._V1_SX300.jpg"},
//                                                {"Title":"Avengers Assemble","Year":"2013–","imdbID":"tt2455546","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg"}
//                                              ],
//                                               "totalResults":"92","Response":"True"
//                                     }
//
//***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************


// N°3


// si se busca por TYPE  --> ( MOVIE TITLE ) --> MARVEL 
// 
// PERO!! si queremos buscar por busqueda general pasa que a lo mejor con la palabra la base de datos o mejor dicho la api 
// nos devolvera todo lo que coincida con ese valor entregado ejemplo SI BUSCAMOS M A R V E L 

// LA API devuelve --->  un objeto JSON --> 

// en la linea 108  y 109 del codigo no son peliculas son JUEGOS de MARVEL


//                         {"Search":[ {"Title":"Captain Marvel","Year":"2019","imdbID":"tt4154664","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"},
//                {"Title":"Captain Marvel","Year":"2019","imdbID":"tt4154664","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"},
//                {"Title":"Marvel One-Shot: Item 47","Year":"2012","imdbID":"tt2247732","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTM2MzY1ODcyN15BMl5BanBnXkFtZTcwNTE3OTIxOA@@._V1_SX300.jpg"},
//                {"Title":"Marvel One-Shot: All Hail the King","Year":"2014","imdbID":"tt3438640","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYTQzNzZiOWItOTNlMC00MjA4LWI5ZTAtODk3MmQ2MGJiYTdmXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"},
//                {"Title":"Marvel One-Shot: Agent Carter","Year":"2013","imdbID":"tt3067038","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYzYyODBjY2MtZGU3MC00YWE3LWExOTUtMzkyMjNkYjUzNjA4XkEyXkFqcGdeQXVyNjA3OTI5MjA@._V1_SX300.jpg"},
//                {"Title":"Marvel One-Shot: A Funny Thing Happened on the Way to Thor's Hammer","Year":"2011","imdbID":"tt2011109","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYmIxYzk2ZTItNTE1OC00NWRkLTkyOTEtMDM1ZjY5MjJlYWE4XkEyXkFqcGdeQXVyNjA3OTI5MjA@._V1_SX300.jpg"},
//                {"Title":"Marvel One-Shot: The Consultant","Year":"2011","imdbID":"tt2011118","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMThhNWExYzgtYzQwOS00MDM5LWFmOGYtOGZhZDQ4MWYzMDNlXkEyXkFqcGdeQXVyNjA3OTI5MjA@._V1_SX300.jpg"},
//                {"Title":"Lego Marvel Super Heroes","Year":"2013","imdbID":"tt2620204","Type":"game","Poster":"https://ia.media-imdb.com/images/M/MV5BOTA5ODA2NTI2M15BMl5BanBnXkFtZTgwNTcxMzU1MDE@._V1_SX300.jpg"},
//                {"Title":"Marvel: Ultimate Alliance","Year":"2006","imdbID":"tt0814207","Type":"game","Poster":"N/A"},{"Title":"Adventures of Captain Marvel","Year":"1941","imdbID":"tt0033317","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNjg0NTk3NjUyNF5BMl5BanBnXkFtZTgwNDQ5MjM1MjE@._V1_SX300.jpg"}],
// "totalResults":"134","Response":"True"}

// el link de busqueda por ejemplo :  http://www.omdbapi.com/?s=marvel&apikey=8f338895

// ENTONCES POR eso es importante al usar        "s" o "t" como parametros 
// usar tambien TYPE id no porque es exacta para cada objeto estricto en JSON pero si para titulos o busquedas genericas 


// EN ESTE CASO 
// RESTRINGMOS usando el siguiente link --> http://www.omdbapi.com/?type=movie&s=marvel&apikey=8f338895

// {"Search":[
//     {"Title":"Captain Marvel","Year":"2019","imdbID":"tt4154664","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"},
//     {"Title":"Captain Marvel","Year":"2019","imdbID":"tt4154664","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"},
//     {"Title":"Marvel One-Shot: Item 47","Year":"2012","imdbID":"tt2247732","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTM2MzY1ODcyN15BMl5BanBnXkFtZTcwNTE3OTIxOA@@._V1_SX300.jpg"},
//     {"Title":"Marvel One-Shot: All Hail the King","Year":"2014","imdbID":"tt3438640","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYTQzNzZiOWItOTNlMC00MjA4LWI5ZTAtODk3MmQ2MGJiYTdmXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"},
//     {"Title":"Marvel One-Shot: Agent Carter","Year":"2013","imdbID":"tt3067038","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYzYyODBjY2MtZGU3MC00YWE3LWExOTUtMzkyMjNkYjUzNjA4XkEyXkFqcGdeQXVyNjA3OTI5MjA@._V1_SX300.jpg"},
//     {"Title":"Marvel One-Shot: A Funny Thing Happened on the Way to Thor's Hammer","Year":"2011","imdbID":"tt2011109","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYmIxYzk2ZTItNTE1OC00NWRkLTkyOTEtMDM1ZjY5MjJlYWE4XkEyXkFqcGdeQXVyNjA3OTI5MjA@._V1_SX300.jpg"},
//     {"Title":"Marvel One-Shot: The Consultant","Year":"2011","imdbID":"tt2011118","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMThhNWExYzgtYzQwOS00MDM5LWFmOGYtOGZhZDQ4MWYzMDNlXkEyXkFqcGdeQXVyNjA3OTI5MjA@._V1_SX300.jpg"},
//     {"Title":"Adventures of Captain Marvel","Year":"1941","imdbID":"tt0033317","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNjg0NTk3NjUyNF5BMl5BanBnXkFtZTgwNDQ5MjM1MjE@._V1_SX300.jpg"},
//     {"Title":"Marvel Studios: Assembling a Universe","Year":"2014","imdbID":"tt3591568","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYmQxMGNiYjgtNzM5NC00YzA2LTlhNGEtM2RkYzFiOGMyOTg3XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"},
//     {"Title":"Pokémon the Movie: Volcanion and the Mechanical Marvel","Year":"2016","imdbID":"tt5889204","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZTUwZDEzZGEtYTJlYi00OTRkLWJmMzItODU0ZWViMTUyYjUzXkEyXkFqcGdeQXVyNzEyMDQ1MDA@._V1_SX300.jpg"}],
// "totalResults":"86","Response":"True"}


// **** AHORA el codigo solo nos devuelve peliculas =)


//***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
