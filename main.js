const userLocation = document.querySelector('#location')
const searchButton = document.querySelector('#search')
searchButton.addEventListener('click', ()=>{
    const location = userLocation.value
    const URL = `http://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${location}&days=3&aqi=no&alerts=no`
    fetch(URL)
    .then(function(rawResponse) {
        return rawResponse.json()
    })
    .then(function(data){
        console.log(data)
        const forecastContainer = document. querySelector('#forecast-container')
        let weatherImage = ""
        switch (data.current.condition.text) {
            case "Cloudy":
                weatherImage = cloudy
                break
            case "Partly Cloudy":
                weatherImage = partlyCloudy
                break
                case "Rain":
                    weatherImage = rainy
            case "Sunny":
                weatherImage = sunny
                break
            case "Clear":
                weatherImage = clear
                break
            case "Mist":
                weatherImage = mist
                break
            default:
                weatherImage = clear
                break
        }
    const weatherImageElement = document.querySelector('#weather-image')
    if (weatherImageElement) {
        weatherImageElement.src = weatherImage
    }
    const temperature = data.current.temp_f
    const condition = data.current.condition.text

    const weatherInfo = document.querySelector('#weather-info')
    if (weatherInfo) {
        weatherInfo.innerHTML = `Current weather: ${condition}, Temperature: ${temperature}°F`;
    }
    })
})

//display current weather and forecast for dates
// style page (background, bigger weather image, )
//add music per weather condition