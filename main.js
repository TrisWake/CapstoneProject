//Pulling data from input box. 1 for location, other for a search button when clicked
const userLocation = document.querySelector('#location')
const searchButton = document.querySelector('#search')
//Searches for location when clicked
searchButton.addEventListener('click', ()=>{
    const location = userLocation.value
    const URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_Key}&q=${location}&days=3&aqi=no`
    fetch(URL)
    .then(function(rawResponse) {
        return rawResponse.json()
    })
    //Logs the data from the API
    .then(function(data){
        console.log(data)
        console.log(data.forecast.forecastday[0].day["avgtemp_f"])
        console.log(data.forecast.forecastday[1].day["avgtemp_f"])
        console.log(data.forecast.forecastday[2].day["avgtemp_f"])

    //Loops through the array of days
        for(let i = 0; i< 3; i++){
            const day = data.forecast.forecastday[i]
            updateWeather(day, i)
        }
    })

    //Updates the weather information (date, condition, images, temperature, and audio)
    function updateWeather(day, dayIndex){
        const weatherText = day.day.condition.text;
        const temperature = day.day.avgtemp_f;
        const date = new Date(day.date)
        const condition = day.day.condition
        const weatherImage = document.querySelector(`#weather-image${dayIndex}`);
        const weatherInfo = document.querySelector(`#weather-info${dayIndex}`);
        const weatherAudio = document.querySelector(`#weather-audio${dayIndex}`);
        const audioSource = document.querySelector(`#audio-source${dayIndex}`)
    //Formats the date thats displayed
        const formattedDate = date.toLocaleDateString('en-us', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    //Displays the date, condition, and temperature on page
        if(weatherInfo){
            weatherInfo.innerHTML = `
            ${formattedDate}
           <br>${weatherText}
            <br>${temperature}°F`
        }
       //Sets and empty variable to store future information
        let weatherIcon = ""
        let audioFile = ""
        //Setting the images and audios to the weather conditions
        if(weatherText.includes ('rain')){
        weatherIcon = rain
        audioFile = 'Audio/Rain SWV.mp3'
        }else if(weatherText.includes ('Cloudy')){
        weatherIcon = cloudy
        audioFile = 'Audio/Supa Dupa Fly.mp3'
        }else if(weatherText === 'Partly Cloudy'){
        weatherIcon = partlyCloudy
        audioFile = 'Audio/Joy_And_Pain.mp3'
        }else if(weatherText == 'Sunny'){
            weatherIcon = sunny
            audioFile = 'Audio/Hot_In_Herre.mp3'
        }else if(weatherText == 'Mist'){
            weatherIcon = mist
            audioFile = 'Audio/Raining Men.mp3'
        }else if(weatherText == 'Clear'){
            weatherIcon = clear
            audioFile = 'Audio/Brighter_Day.mp3'
        }
        else{ 
            weatherIcon = overcast
            audioFile = 'Audio/Hey Ya.mp3'
        }
        //Setting the images
        if(weatherImage){
            weatherImage.src = weatherIcon
        }
        //Setting the audios
        if(audioSource && weatherAudio){
            audioSource.src = audioFile
            weatherAudio.load()
        }
    }
})

// style page (background, bigger weather image, )