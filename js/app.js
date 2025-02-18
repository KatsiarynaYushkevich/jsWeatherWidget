const topBlock = document.querySelector(".top_block");
const bottomBlock = document.querySelector(".bottom_block");

fetch('https://api.openweathermap.org/data/2.5/forecast?q=Minsk&units=metric&appid=a94d0a5ac08570add4b47b8da933f247')
.then((response) =>  response.json())
.then((data) =>   {const currentWeather = data.list[0];

const iconCode = currentWeather.weather[0].icon;
const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

addWeather();

function addWeather(){
    let currentTime = new Date().toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit' });

    topBlock.innerHTML = `    
    <div class="city_time"> 
    <span>${data.city.name}</span>
    <span>${currentTime}</span>
    </div>
    <div class="weather">
    <img src="${iconUrl}">
    <span>${currentWeather.weather[0].main}</span>
    <span>${Math.round(currentWeather.main.temp)} °C</span>
    </div>
    <div class="wind_speed"> 
    <span>Speed</span>
    <span>${currentWeather.wind.speed} m/s</span>
    </div>
    `  
}


function showWeatherInfo(forecast){

    const forecastDate = new Date(forecast.dt * 1000).toISOString().split('T')[0];
    const forecastTime = new Date(forecast.dt * 1000).toLocaleTimeString('ru-RU');
    const forecastIconCode = forecast.weather[0].icon;
    const forecastIconUrl = `https://openweathermap.org/img/wn/${forecastIconCode}@2x.png`;
    
    const weatherDiv = document.createElement("div");
    weatherDiv.classList.add("past_weather");
    weatherDiv.innerHTML = `
    <div class="date_time">
    <span>${forecastDate}</span>
    <span>${forecastTime}</span>
    </div>
    <img src="${forecastIconUrl}">
    <span>${Math.round(forecast.main.temp)} °C</span>
    `;
    bottomBlock.appendChild(weatherDiv);
}


for (let i = 0; i < data.list.length; i += 8) {
    const forecast = data.list[i];
    showWeatherInfo(forecast);
}});

