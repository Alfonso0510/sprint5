////Constante donde guardamos la direccion de la api
const URL_API = "https://icanhazdadjoke.com/slack";
//Constante para imprmir por pantalla el chiste, usando selector de clase
const tmpl = document.querySelector(".joke");
let ratedJokes = []

//Wheaher variables
let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;

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

//Exercici 3 valorar chiste
function rateJoke(rate) {
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


//Exercici 4 mostrar api meteorologica
window.addEventListener("load", () => {
    //Geolocalizacion
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            // Token de la API
            const api = "033365ec6e62260e2f094aaae64e894c";

            // URL de la API
            const base =
                `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
                `lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;

            //LLamada a la API
            fetch(base)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    temperature.textContent =
                        Math.floor(data.main.temp - kelvin) + "°C";
                    summary.textContent = data.weather[0].description;
                    loc.textContent = data.name + "," + data.sys.country;
                    let icon1 = data.weather[0].icon;
                    icon.innerHTML =
                        `<img src="icons/${icon1}.svg" style= 'height:10rem'/>`;
                });
        });
    }
});