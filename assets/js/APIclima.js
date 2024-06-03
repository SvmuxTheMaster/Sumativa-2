let apiKey = '03a83c2e3e461a56f569d3e61db747a3';
let ciudad = document.getElementById('city');
let boton = document.getElementById('btn');

let resultado = document.getElementById('resultado');

let getWeather = () => {
    let city_name = ciudad.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}&units=metric`
    fetch ( url ).then( (response) => response.json() ).then(data =>{
        console.log("La temperatura es: "+ (data.main.temp) + "°C");
        console.log(data.weather[0].description);
        resultado.innerHTML = `<h2>${data.name}<h2>
        <h1>${data.main.temp} °C<h1>
        <h4>${data.weather[0].description}<h4>`
    });
}

boton.addEventListener('click', getWeather);