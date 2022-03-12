////Constante donde guardamos la direccion de la api
const URL_API = "https://icanhazdadjoke.com/slack";
//Constante para imprmir por pantalla el chiste, usando selector de clase
const tmpl = document.querySelector(".joke");
let ratedJokes = []

//Exercici 1 mostrar por consola
// function showJoke(){
//      fetch(URL_API)
//      .then((response) => response.json())
//      .then((data) => {
//          console.log(data.attachments[0].text);
//      })
//  };

//Exercici 2 mostrar por pantalla
function showJoke() {
    fetch(URL_API)
    .then(response => response.json())
    .then((data) => {
        //Pintamos por pantalla el chiste
        tmpl.innerHTML = `${data.attachments[0].text}`
    })
}

function rateJoke(rate){
    //Creamos el objeto joke para guardar
    let ratedJoke = {};
    //Introducimos el texto del chiste
    ratedJoke.joke = tmpl.innerHTML;
    //Introducimos la puntuacion
    ratedJoke.score = rate;
    //Creamos una current date
    ratedJoke.date = new Date();
    //Hacemos un push al array de jokes
    ratedJokes.push(ratedJoke);
    console.log("reportJokes: ", ratedJokes)
}