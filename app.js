
async function getWeather(city){

    let appId = 'yourUniqueAppId'; //create one at openweathermap.org
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&APPID='+appId;
    try {
        const data = await fetch(url)
        .then((res) => res.json())
        displayWeather(data)
    } catch(error) {
        document.querySelector('.loading').innerHTML = 'Oops.. could not reach server, try checking your connection.'
    };
};

function displayWeather(data){

    document.querySelector('#city').innerHTML = data.name
    document.querySelector('#temperature').innerHTML = data.main.temp
    document.querySelector('#humidity').innerHTML = data.main.humidity
    document.querySelector('#description').innerHTML = data.weather[0].description
    document.querySelector('#wind-speed').innerHTML = (data.wind.speed * 3.6).toFixed(1)
    document.querySelector('.loading').style.display = 'none'
    document.querySelector('.weather').style.display = 'grid'
};

document.addEventListener('DOMContentLoaded', getWeather('Pretoria'));
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#search-btn')
    .addEventListener('click', () => {
        let city = document.querySelector('#search-bar').value;
        getWeather(city);
    });
});
//the end :-)
