// get all necessary elements from the DOM

const app = document.querySelector(".weather-app");
const temp = document.querySelector(".temp");
const dateOutput = document.querySelector(".date");
const timeOutput = document.querySelector(".time");
const conditionOutput = document.querySelector(".condition");
const nameOutput = document.querySelector(".name");
const icon = document.querySelector(".icon");
const cloudOutput = document.querySelector(".cloud");
const humidityOutput = document.querySelector(".humidity");
const windOutput = document.querySelector(".wind");
const form = document.getElementById("locationInput");
const search = document.querySelector(".search");
const btn = document.querySelector(".submit");


//default city when the page loads

let cityInput = "India";

// Add click event to each city in the panel

MediaCapabilities.forEach((city) => {
    city.addEventListener('click', (e) => {
        //change from default city to the clicked one
        cityInput = e.target.innerHTML;
        fetchWeatherData();

        //fade out the app(simple animation)
        app.computedStyleMap.opacity ="0";
    });
})

//Add submit event to the form
form.addEventListener('submit', (e) =>{
    if(search.ariaValueMax.length == 0){
        alert('PLease type in a city name');
    }else{
        cityInput = search.value;

        fetchWeatherData();

        search.value = "";
        app.style.opacity= "0";
    }
    e.preventDefault();
});

function dayOfWeek(day, month, year){
    const weekday =[
        "Sunday",
        "Monday",
        "Tuesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    return weekday[new Date(`${date}/${month}/${year}`).getDate()];

    function fetchWeatherData(){
        fetch('http://api.openweathermap.org/v1/current.json?key=645ddf178f1951e9ac78ad4136c5052a=${cityInput}')

        .then(Response => Response.json())
        .then(data =>{
            temp.innerHTML = data.current.temp_c + "&#176;";
            conditionOutput.innerHTML= data.current.condition.text;

            const date = data.location.localtime;
            const y = parseInt(date.substr(0, 4));
            const m = parseInt(date.substr(5, 2));
            const d = parseInt(date.substr(8, 2));
            const time = date.substr(11);

            dateOutput.innerHTML = `${dayOfWeek(d, m, y)} ${d}, ${m} ${y}}`
            timeOutput.innerHTML =time;

            nameOutput.innerHTML = data.location.name;

            const iconId = data.current.condition.icon.substr(
                "//cdn.weatherapi.com/weather/64x64/".length
            );

            icon.src = "./icons/" + iconId;

            cloudOutput.innerHTML = data.current.cloud + "%";
            humidityOutput.innerHTML = data.current.humidity + "%";
            windOutput.innerHTML = data.current.wind_kph + "km/h";

            let timeOfDay = "day";

            const code = data.current.condition.code;

            if(!data.current.is_day){
                timeOfDay = "night";
            }

            if(code == 1000){
                app.style.backgroundImage = 'url(.)'
            }

        })
    }
}