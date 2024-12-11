const userLocation = document.querySelector('#location')
const searchButton = document.querySelector('#search')
searchButton.addEventListener('click', ()=>{
    const location = userLocation.value
    const URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_Key}&q=${location}&days=3&aqi=no&alerts=no`
    fetch(URL)
    .then(function(rawResponse) {
        return rawResponse.json()
    })
    .then(function(data){
        console.log(data)
        const forecastContainer = document. querySelector('#forecast-container')
        let weatherSong = ""
        let weatherImage = ""
        switch (data.forecast.forecastday[i].day.condition.text) {
            case "Cloudy":
                weatherImage = cloudy
                weatherSong = cloudySong
                break
            case "Partly Cloudy":
                weatherImage = weatherpartlyCloudy
                weatherSong = partlyCloudySong
                break
                case "Rain":
                weatherImage = rain
                weatherSong = rainySong
                break
            case "Sunny":
                weatherImage = sunny
                weatherSong = sunnySong
                break
            case "Clear":
                weatherImage = clear
                weatherSong = clearSong
                break
            case "Mist":
                weatherImage = mist
                weatherSong = mistSong
                break
            default:
                weatherImage = clear
                break
        }
    const weatherImageElement = document.querySelector('#weather-image')
    if (weatherImageElement) {
        weatherImageElement.src = weatherImage
    }
    const temperature = data.forecast.forecastday.day.temp_f
    const condition = data.forecast.forecastday.day.condition.text

    const weatherInfo = document.querySelector('#weather-info')
    if (weatherInfo) {
        weatherInfo.innerHTML = `Current weather: ${condition}, Temperature: ${temperature}°F`;
    }
    const weatherAudio = document.querySelector('#weather-audio')
            const audioSource = document.querySelector('#audio-source')
            audioSource.src = weatherSong
            weatherAudio.load()
            weatherAudio.play()
    })
})


//display current weather and forecast for dates
// style page (background, bigger weather image, )
//add music per weather condition