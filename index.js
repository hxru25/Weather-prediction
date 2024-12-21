const apikey="947d76e71ce3bfada11eeabcd370e3b8"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

document.getElementById('search').addEventListener('click',()=>{checkWeather(document.getElementById('input').value)})

async function checkWeather(city){

    const response = await fetch(apiurl+ city + `&appid=${apikey}`)
    console.log(apiurl + city + `&appid=${apikey}`)

    let data = await response.json();


    document.querySelector('.city').inner = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity;
    document.querySelector('.wind').innerHTML = data.wind.speed;
    
}