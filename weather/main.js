
const getWeather = () => {
   const apikey = 'a4e7cda99f942a7eb29e0e8578f1ccac';
    const city = document.getElementById('cityName').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        
        const textShow = document.getElementById('textShow');
        const description = data.weather[0].description;
        const  temperature = data.main.temp;
        const  humidity = data.main.humidity;
        const  windSpeed = data.wind.speed;

        textShow.innerHTML = `
        
         <p> Description: ${description}</p>
         <p> Temperature: ${temperature} &#8451</p>
         <p> Humidity: ${humidity}%r</p>
         <p> WindSpeed: ${windSpeed}</p>
        
        `;
    })
}