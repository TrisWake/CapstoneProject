const userLocation = document.querySelector('#location')
const searchButton = document.querySelector('#search')
searchButton.addEventListener('click', ()=>{
    const location = userLocation.value
    const URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_Key}&q=${location}&days=3&aqi=no`
    fetch(URL)
    .then(function(rawResponse) {
        return rawResponse.json()
    })
    .then(function(data){
        console.log(data)
        console.log(data.forecast.forecastday[0].day["avgtemp_f"])
        console.log(data.forecast.forecastday[1].day["avgtemp_f"])
        let currentWeather = document.querySelector("#weather-info")
        currentWeather.innerText = data.forecast.forecastday[0].day["avgtemp_f"]
        
        
        let weatherImage = document.querySelector('#weather-image')
        let image = data.forecast.forecastday[0].day
        if(data.forecast.forecastday[0].day.condition.text = "sunny"){
            weatherImage.src = sunny && 
        } 
        if(data.forecast.forecastday[0].day.condition.text = "cloudy"){
            weatherImage.src = cloudy
        } 
        if(data.forecast.forecastday[0].day.condition.text = "rain"){
            weatherImage.src = rain
        } 
        if(data.forecast.forecastday[0].day.condition.text = "mist"){
            weatherImage.src = mist
        } 
        if(data.forecast.forecastday[0].day.condition.text = "partly cloudy"){
            weatherImage.src = partlyCloudy
        } 
        if(data.forecast.forecastday[0].day.condition.text = "clear"){
            weatherImage.src = clear
        } 
    })

    // const weatherInfo = document.querySelector('#weather-info')
    // if (weatherInfo) {
    //     weatherInfo.innerHTML = `Current weather: ${condition}, Temperature: ${temperature}°F`;
    // }
    const weatherAudio = document.querySelector('#weather-audio')
            const audioSource = document.querySelector('#audio-source')
            audioSource.src = weatherSong
            weatherAudio.load()
            weatherAudio.play()
})


//display current weather and forecast for dates
// style page (background, bigger weather image, )
//add music per weather condition