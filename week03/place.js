function calculateWindChill(temperature, windSpeed) {
    // Windchill formula for Celsius
    if (temperature <= 10 && windSpeed >= 5) { // Celsius conditions for windchill
        const windChill = 13.12 + 0.6215 * temperature -  11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2); // Return windchill rounded to two decimal places
    }
    return "N/A"; // If windchill conditions aren't met
}

// Function to generate random weather data (temperature and humidity)
function getRandomWeatherData() {
    const temperature = (Math.random() * (35 - 10) + 10).toFixed(1);  // Random temperature between 10°C and 35°C
    const humidity = (Math.random() * (100 - 50) + 50).toFixed(1);     // Random humidity between 50% and 100%
    return { temperature, humidity };
}

// Display current year and last updated date in footer
window.onload = function() {
    // Current Year
    const currentYear = new Date().getFullYear();
    document.getElementById("year").textContent = currentYear;

    // Last Modified Date
    const lastModifiedDate = document.lastModified;
    document.getElementById("updated").textContent = lastModifiedDate;

    // Get random weather data
    const { temperature, humidity } = getRandomWeatherData();

    // Display the temperature and humidity in the weather section
    document.getElementById("temperature").textContent = temperature;
    document.getElementById("humidity").textContent = humidity;

    // Static wind speed (this can also be randomized or fetched from an API in the future)
    const windSpeed = 10; // Wind speed in km/h

    // Calculate and display the windchill
    document.getElementById("windchill").textContent = `${calculateWindChill(parseFloat(temperature), windSpeed)} °C`;
};