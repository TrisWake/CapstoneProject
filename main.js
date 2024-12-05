const userlocation = document.querySelector('#location')
const forecast = document.querySelector('#forecast')
const airQuality = document.querySelector('#toggleButton')
const URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_Key}&q=${userlocation.value}&${forecast}&aqi=yes&alerts=yes`
document.querySelector('#search').addEventListener('click', ()=>{
    const URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_Key}&q=${userlocation.value}&${forecast}&aqi=yes&alerts=yes`
    fetch(URL)
    .then(function(rawResponse) {
        return rawResponse.json()
    })
    .then(function(data){
        console.log(data)
        })
    // const weatherDescription = data.weather.main
})