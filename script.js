const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "a17ebec192b55d92a9c0ddb947f5b916";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value; // Get the value of the input field here

    if(city) {
        try {
            const weatherData = await getWeatherData(city); // Pass city as an argument
            displayWeatherInfo(weatherData);
        }
        catch(error) {
            alert(error);
        }
    } else {
        alert("Please enter a city!")
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    const weatherData = await response.json(); // Parse response as JSON
    console.log(weatherData);
}

function displayWeatherInfo(data) {
    // Implement this function to display weather information on the UI
}

function getWeatherEmoji(weatherId) {
    // Implement this function to get weather emoji based on weather ID
}
