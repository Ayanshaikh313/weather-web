const apiKey ="8813b68b12cacc82b594562c64d145bf";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ " °C";
    document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity)  + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed)  + " km/hr";


    if (data.weather[0].main == "Clouds") {
        console.log(data.weather[0].main);
        weatherIcon.src = "assets/images/clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        console.log(data.weather[0].main);
        weatherIcon.src = "assets/images/clear.png";
    }
    else if (data.weather[0].main == "Rain"){
        console.log(data.weather[0].main);
        weatherIcon.src = "assets/images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        console.log(data.weather[0].main);
        weatherIcon.src = "assets/images/drizzle.png";
    }
    else if (data.weather[0].main == "Snow"){
        console.log(data.weather[0].main);
        weatherIcon.src = "assets/images/snow.png";
    }
    else if (data.weather[0].main == "Mist"){
        console.log(data.weather[0].main);
        weatherIcon.src = "assets/images/mist.png";
    }
}  
searchBtn.addEventListener("click", ()=>{
    console.log(searchBox.value);
    
    checkWeather(searchBox.value);
    
} )

