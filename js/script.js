////Constante donde guardamos la direccion de la api
const URL_API = "https://icanhazdadjoke.com/slack";
//Constante para imprmir por pantalla el chiste, usando selector de clase
const tmpl = document.querySelector(".joke");

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