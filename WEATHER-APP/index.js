const searchValue = document.getElementsByClassName("search-box")[0]
var weather = {
    fetchWeather:function(){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            searchValue.value+
            "&units=metric&appid=30211aacf38220066d28adc870146b09"
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather:function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } =data.main;
        const { speed } = data.wind;
        
        document.getElementsByClassName("city")[0].innerHTML = "Weather in"+" "+searchValue.value
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementsByClassName("description")[0].innerHTML = description;
        document.getElementsByClassName("humidity")[0].innerHTML ='Humidity: '+humidity+'%';
        document.getElementsByClassName("wind")[0].innerHTML = 'wind speed: '+speed+" km/hr";
        document.querySelector(".weather").classList.remove("dis")
    }
}
searchValue.addEventListener("keydown",function(e){
    if(e.key == 'Enter'){
        weather.fetchWeather()
    }
})
var iconFind = document.getElementById("search-icon")
iconFind.addEventListener("click",function(e){
    weather.fetchWeather()
})
