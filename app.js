let searchBox = document.querySelector(".search-box");
let button = document.querySelector(".button");
let city = document.querySelector(".city");
let country = document.querySelector(".date");
let temp = document.querySelector(".temp");
let weather = document.querySelector(".weather");
let high = document.querySelector(".high");
let stateContainer = document.querySelector(".state");
let loader = document.querySelector(".loader");

button.addEventListener("click", function () {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        searchBox.value +
        "&appid=023d3b9525513c0c7eee958f5f0ec6bb"
    )
        .then((response) => response.json())
        .then((data) => {
            city.innerHTML = `${data.name}, ${data.sys.country}`;
            temp.innerHTML = `${data.main.temp}°C`;
            weather.innerHTML = `${data.weather[0].main}`;
            high.innerHTML = `windSpeed: ${data.wind.speed}km/hr /  Humidity: ${data.main.humidity}°C`;

            while (stateContainer.firstChild) {
                stateContainer.firstChild.remove();
            }

            const icon = document.createElement("img");

            if (data.weather[0].main === "Clouds") {
                icon.src = "./assets/cloud (1).png";
            } else if (
                data.weather[0].main === "Rain" ||
                data.weather[0].main === "Mist"
            ) {
                icon.src = "./assets/rain.png";
            } else if (data.weather[0].main === "Clear") {
                icon.src = "./assets/contrast.png";
            }
            stateContainer.appendChild(icon);
        })
        .catch((err) => alert("Wrong City Name!"));
});