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
        console.log(data.forecast.forecastday[2].day["avgtemp_f"])
        
    let weatherAudio = document.querySelector('#weather-audio')
            let audioSource = document.querySelector('#audio-source')
            let songURL = ""
            weatherAudio = `music.js${songs}`
            audioSource.src = data.forecast.forecastday[0].day.condition.text
            console.log(songs)

        //Info for Day 1
        let currentWeather = document.querySelector("#weather-info")
        currentWeather.innerText = data.forecast.forecastday[0].day["avgtemp_f"]
        let weatherImage = document.querySelector('#weather-image')
        let image = data.forecast.forecastday[0].day
        audioSource = document.querySelector("#audio-source")
        function playAudio(){
            weatherAudio.play()
        }
        function pauseAudio(){
            weatherAudio.pause()
        }
        if(data.forecast.forecastday[0].day.condition.text = "sunny"){
            weatherImage.src = sunny
            weatherAudio = new Audio("https://www.last.fm/music/Maze/_/Joy+and+Pain")
            weatherAudio.play()
            // console.log(sunnySong)
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
            weatherAudio = new Audio("https://www.pandora.com/artist/johnny-nash/i-can-see-clearly-now/i-can-see-clearly-now-edit/TR3xclm5x4bhbX9")
            weatherAudio.play()
        } 
    
        // Info for Day 2
        let currentWeather1 = document.querySelector("#weather-info1")
        currentWeather1.innerText = data.forecast.forecastday[1].day["avgtemp_f"]
        let weatherImage1 = document.querySelector('#weather-image1')
        let image1 = data.forecast.forecastday[1].day
        if(data.forecast.forecastday[1].day.condition.text = "sunny"){
            weatherImage1.src = sunny 
        } 
        if(data.forecast.forecastday[1].day.condition.text = "cloudy"){
            weatherImage1.src = cloudy
        } 
        if(data.forecast.forecastday[1].day.condition.text = "rain"){
            weatherImage1.src = rain
        } 
        if(data.forecast.forecastday[1].day.condition.text = "mist"){
            weatherImage1.src = mist
        } 
        if(data.forecast.forecastday[1].day.condition.text = "partly cloudy"){
            weatherImage1.src = partlyCloudy
        } 
        if(data.forecast.forecastday[1].day.condition.text = "clear"){
            weatherImage1.src = clear
        } 
        //Info for Day 3
        let currentWeather2 = document.querySelector("#weather-info2")
        currentWeather2.innerText = data.forecast.forecastday[2].day["avgtemp_f"]
        let weatherImage2 = document.querySelector('#weather-image2')
        let image2 = data.forecast.forecastday[2].day
        if(data.forecast.forecastday[2].day.condition.text = "sunny"){
            weatherImage2.src = sunny 
        } 
        if(data.forecast.forecastday[2].day.condition.text = "cloudy"){
            weatherImage2.src = cloudy
        } 
        if(data.forecast.forecastday[2].day.condition.text = "rain"){
            weatherImage2.src = rain
        } 
        if(data.forecast.forecastday[2].day.condition.text = "mist"){
            weatherImage2.src = mist
        } 
        if(data.forecast.forecastday[2].day.condition.text = "partly cloudy"){
            weatherImage2.src = partlyCloudy
        } 
        if(data.forecast.forecastday[2].day.condition.text = "clear"){
            weatherImage2.src = clear
        } 
    })
})
    // const weatherInfo = document.querySelector('#weather-info')
    // if (weatherInfo) {
    //     weatherInfo.innerHTML = `Current weather: ${condition}, Temperature: ${temperature}°F`;
    // }
    


//display current weather and forecast for dates
// style page (background, bigger weather image, )
//add music per weather condition