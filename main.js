// Get weather updates
function showWeather() {
    const weatherContainer = document.getElementById('weatherContainer');
    const weatherData = {
      current: {
        temp: 25,
        conditions: 'Sunny'
      },
      forecast: 'Clear skies for the next few days'
    };
    // Display weather information
    weatherContainer.innerHTML = `
      <h2>Weather Updates</h2>
      <p>Current Temperature: ${weatherData.current.temp}°C</p>
      <p>Conditions: ${weatherData.current.conditions}</p>
      <p>Forecast: ${weatherData.forecast}</p>
    `;
  }
  
  // Show more features
  function showMoreFeatures() {
    const moreFeaturesContainer = document.getElementById('moreFeaturesContainer');
    const moreFeaturesData = ['Data Analysis', 'Inventory Tracking', 'Pest Control', 'Price Comparison'];
    // Display more features information
    moreFeaturesContainer.innerHTML = `
      <h2>Additional Features</h2>
      <ul>
        ${moreFeaturesData.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
    `;
  }
  