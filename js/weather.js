const API_KEY = "25554a156f3d01d8e2ae02da581ab628";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weatherWrap = document.querySelector("#weather");
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const weatherIcon = document.createElement("img");
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        city.innerHTML = data.name;
        weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}℃`;
        weatherWrap.prepend(weatherIcon);
    });
}

function onGeoErr() {
    console.log("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);