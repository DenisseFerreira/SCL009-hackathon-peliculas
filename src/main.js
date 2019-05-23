//  Valores del DOM
const contenedorPeliculas2 = document.getElementById('contenedorPeliculas2'); 
const indicadorCarrusel = document.getElementById('indicadorCarrusel'); 

/*  2 Obtener data de url */

let gvRecomendadosId1 = [];
let gvRecomendadosId2 = [];
let gvRecomendadosId3 = [];
//fase 1
gvRecomendadosId1.push('tt0371746'); //iron man 
gvRecomendadosId1.push('tt0800080'); // hulk
gvRecomendadosId1.push('tt1707807'); // iron
gvRecomendadosId1.push('tt0800369'); // thor
gvRecomendadosId1.push('tt0458339'); // capi
gvRecomendadosId1.push('tt0848228'); // avengers
//fase 2
//gvRecomendadosId2.push('tt0371746'); // iron man
gvRecomendadosId2.push('tt1981115'); //thor
gvRecomendadosId2.push('tt4203008'); // capi
gvRecomendadosId2.push('tt2395427'); // avengers/ultron
gvRecomendadosId2.push('tt5286008'); //guardianes 
gvRecomendadosId2.push('tt0478970'); // ant-man
//fase 3
gvRecomendadosId3.push('tt3498820');//capi
gvRecomendadosId3.push('tt1211837');//doctor
gvRecomendadosId3.push('tt3896198');//guardianes
gvRecomendadosId3.push('tt2250912');//spider
gvRecomendadosId3.push('tt3501632');//thor
gvRecomendadosId3.push('tt1825683');//panther
gvRecomendadosId3.push('tt4154756');//avengers
gvRecomendadosId3.push('tt5095030');//ant-man
gvRecomendadosId3.push('tt4154664');//capitana
gvRecomendadosId3.push('tt4154796');//avengers
gvRecomendadosId3.push('tt6320628');//spider
//fase 4
//En desarrollo


const btnFase1 = document.getElementById("fase1");
const btnFase2 = document.getElementById("fase2");
const btnFase3 = document.getElementById("fase3");

//Botones para cada fase

btnFase1.addEventListener("click", () => {
        console.log("estoy dentro del fase 1");
        traerRecomendados(gvRecomendadosId1);
    }
)


btnFase2.addEventListener("click", () => {
    console.log("estoy dentro del fase 2");
    traerRecomendados(gvRecomendadosId2);
}
)

btnFase3.addEventListener("click", () => {
    console.log("estoy dentro del fase 3");
    traerRecomendados(gvRecomendadosId3);
}
)

 /*Enlace que lleva al inicio*/
 const btnHome= document.getElementById("home");
 btnHome.addEventListener("click", ()=>{
    document.getElementById("peterpaker").style = "display:block";
    document.getElementById("contenidoCarrusel").style = "display:none";
 });


const traerRecomendados = (gvRecomendadosId) => {
    //    for(let i = 0;  i < gvRecomendadosId.length; i++) 
    document.getElementById("contenidoCarrusel").style = "display:block";
    document.getElementById("peterpaker").style = "display:none";
    contenedorPeliculas2.innerHTML= "";
    indicadorCarrusel.innerHTML = "";
    let lv_flag = 0;
    for (let recomendado of gvRecomendadosId) {
   
        fetch('http://www.omdbapi.com/?apikey=4896bf68&i=' + recomendado)
            .then(i => i.json())
            .then(i => {
                    if (i.Poster == 'N/A'){
                        i.Poster = 'img/Imagen-no-disponible.png';
                    }
            // inicio carrusel        
            if (lv_flag === 0){
                contenedorPeliculas2.innerHTML +=`
                <div class="item active" style="color:white"> <h1>${i.Title}</h1>
                    <img src="${i.Poster}" alt="${i.Title}" style="float:left">
                    <div>
                        <h3> ${i.Awards}</h3>
                        <h3> Año ${i.Year}</h3>
                        <h3> Género ${i.Genre}</h3>
                        <h3> Ranking ${i.imdbRating}/10 </h3>
                        <h3> Sitio Web ${i.Website}</h3>
                        <h3> Duración ${i.Runtime}</h3>
                        <h3> Actores ${i.Actors}</h3>
                        <h3> ${i.Plot}</h3>
                        
                    </div>
                    </div>
                    `
              lv_flag = 1;
            }else{
                contenedorPeliculas2.innerHTML +=`
                <div class="item" style="color:white"> <h1>${i.Title}</h1>
                    <img src="${i.Poster}" alt="${i.Title}" style="float:left">
                    <div>
                    <h3> ${i.Awards}</h3>
                    <h3> Año ${i.Year}</h3>
                    <h3> Género ${i.Genre}</h3>
                    <h3> Ranking ${i.imdbRating}/10 </h3>
                    <h3> Sitio Web ${i.Website}</h3>
                    <h3> Duración ${i.Runtime}</h3>
                    <h3> Actores ${i.Actors}</h3>
                    <h3> ${i.Plot}</h3>
                    </div>
                </div>
                `
            }
            // fin carrusel
     
            })
            .catch(err => console.log(err.code))
    }

    for(let i = 0; i < gvRecomendadosId.length; i++){
        if (i==0 ){
            indicadorCarrusel.innerHTML += `<br>
            <li data-target="#myCarousel" data-slide-to="${i}" class="active"></li>
        `    
        }else{
            indicadorCarrusel.innerHTML += `<br>
            <li data-target="#myCarousel" data-slide-to="${i}"></li>
        `   
        }   
    }
}

const appInit = ()=>{
    document.getElementById("contenidoCarrusel").style = "display:none";
}

appInit();





