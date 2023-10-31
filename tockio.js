var fetchdata = position => {
    var { latitudes , longitudes } = position, coords;
    var latitudes = "latitudes";
    var longitudes = "longitudes";
    if(navigator.geolocation.position){
        navigator.geolocation.getCurrentPosition(position);
        console.log(position);
    }

    

fetch ('https://api.openweathermap.org/data/2.5/weather?q=tokio&lang=es&units=metric&appid=510dc9588ba07077cda5a3e1b88d0cda')

.then(resp => resp.json())
.then(data => setweatherdata(data))
}
var setweatherdata = data => {
    console.log(data)

    var weatherdata = {
        location: data.name,
        description: data.weather[0].description,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: data.main.temp_max,
        clouds: data.clouds.all,
        wind: data.wind.speed,
        sunrise: data.sys.sunrise,  
        sunset: data.sys.sunset,  
        
    }
    
    Object.keys(weatherdata).forEach(key => {
        document.getElementById(key).textContent = weatherdata[key];
    });





} 

var onload = () =>{
    navigator.geolocation.getCurrentPosition(fetchdata);
}