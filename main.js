const userlocation = document.querySelector('#location')
const startDateInput = document.querySelector('#start-date')
const endDateInput = document.querySelector('#end-date')
const searchButton = document.querySelector('#search')
searchButton.addEventListener('click', ()=>{
    const location = userlocation.value
    const startDate = startDateInput.value
    const endDate = endDateInput.value
    const URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_Key}&q=${userlocation.value}&dt=${startDate}&end_dt=${endDate}`
    fetch(URL)
    .then(function(rawResponse) {
        return rawResponse.json()
    })
    .then(function(data){
        console.log(data)
        const forecastContainer = document. querySelector('#forecast-container')
        forecastContainer.innerHTML = ""
        // data.forecastday.
        let weatherImage = ""
        switch (data.forecastday.day.condition.text) {
            case "Cloudy":
                weatherImage = cloudy
                break
            case "Partly Cloudy":
                weatherImage = partlyCloudy
                break
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
    const temperature = data.forecastday[0].day.temp_f
    const condition = data.forecastday[0].day.condition.text

    const weatherInfo = document.querySelector('#weather-info')
    if (weatherInfo) {
        weatherInfo.innerHTML = `Current weather: ${condition}, Temperature: ${temperature}°C`;
    }
    })
})
//display current weather and forecast for dates
// style page (background, bigger weather image, )
//add music per weather condition