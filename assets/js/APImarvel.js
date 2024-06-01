//PRIVATE KEY = '1cf4ba93e9516fd127638832ebdef5851e284e0c';
//PUBLIC KEY = '18dc40300f31c3153af385bff0956cba'

const apikey = '18dc40300f31c3153af385bff0956cba';
const ts = '31/05/2024, 21:49:36';
const hash = '279f1dbf8f5ec3e88bae7ff3e68eeb81';
const urlAPI = `https://gateway.marvel.com:443/v1/public/comics?apikey=${apikey}&ts=${ts}&hash=${hash}`;


const obtenerComics = async () => {
    try {
        const response = await fetch(urlAPI);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(`El error es: ${e}`);
    }
}

const mostrarComics = (comics) => {
    const container = document.getElementById('comics-container');
    comics.forEach((comic) => {
        const comicElement = document.createElement('div');
        comicElement.className = 'comic';

        const title = document.createElement('h2');
        title.textContent = comic.title;

        const thumbnail = document.createElement('img');
        thumbnail.src = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
        thumbnail.alt = comic.title;

        comicElement.appendChild(title);
        comicElement.appendChild(thumbnail);

        container.appendChild(comicElement);
    });
}

obtenerComics()
    .then((data) => {
        if (data && data.data && data.data.results) {
            mostrarComics(data.data.results);
        } else {
            console.log('La estructura de la respuesta no es la esperada', data);
        }
    })
    .catch((e) => {
        console.log(e);
    });