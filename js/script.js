////Constante donde guardamos la direccion de la api
const URL_API = "https://icanhazdadjoke.com/slack";

//Exercici 1 mostrar por consola
function showJoke(){
     fetch(URL_API)
     .then((response) => response.json())
     .then((data) => {
         console.log(data.attachments[0].text);
     })
 };