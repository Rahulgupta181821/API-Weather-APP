
const searchCity  = async () => {
    const City = document.getElementById('city-input').value
  
   const data = await getWeatherData(City)
   showWeatherData(data)
    console.log(City)
  }
  
  const getWeatherData = (City) => {
  
    const url = `https://open-weather13.p.rapidapi.com/city/${City}` ;
  const options = {
      method: 'GET',
      headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': '975a0ece43mshbdbb0ef1d31b50bp13cf3djsn1304f334567a',
          'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      }
  };
  
   return  fetch(url,options).then(response => response.json()).then(data => data)
  .catch(err => console.error(err))
  }
  
  const showWeatherData = (weatherData) => {
    console.log(weatherData, 'cookies')
    console.log(weatherData.main.temp)
    document.getElementById('temp').innerText = weatherData.main.temp
    document.getElementById('city-name').innerText = weatherData.name
    document.getElementById('weather-type').innerText = weatherData.weather[0].main
    document.getElementById('min-temp').innerText = weatherData.main.temp_min
    document.getElementById('max-temp').innerText = weatherData.main.temp_max
  }
  
  