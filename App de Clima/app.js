const busqueda = "monterrey,nuevoleon";
const key = "591da29ea973cf7578344b55ddfd69f3";
const KELVIN = 273;


//datos del clima seleccionados
const iconoclima = document.querySelector(".iconoclima");
const numtemperatura = document.querySelector(".numtemperatura p");
const tempdescrip = document.querySelector(".tempdescripcion");
const localizacion = document.querySelector(".localizacion");


function getweather() {
    const inputbusqueda = document.querySelector("#inputbusqueda").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputbusqueda}&appid=${key}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            iconoclima.innerHTML = `<img src="icons/${data.weather[0].icon}.png"/>`;
            let tempFA = data.main.temp - KELVIN;
            let TEMPC = Math.floor(tempFA);
            numtemperatura.innerHTML = `${TEMPC} °<span>C</span>`;
            tempdescrip.innerHTML = data.weather[0].description;
            localizacion.innerHTML = `${data.name},${data.sys.country}`;
        })
        .catch(function() {
            alert('No se pudo encontrar la locación');
        });

}

function limpiarform() {
    const form = document.querySelector('#form');
    form.reset();
}

/*enviar peticion a la API */
const BtnEnviar = document.querySelector("#idbutton");
BtnEnviar.addEventListener('click', function(evento) {
    evento.preventDefault();
    getweather();
    limpiarform();
})