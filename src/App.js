import "./App.css";
import Author from "./Author";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Tehran" />
      <Author />
    </div>
  );
}

export default App;
// Function to display AI Weather Insight
function displayAIInsight(weatherData) {
    const aiInsight = document.getElementById('aiInsight');
    let insight = '';

    if (weatherData.main.temp > 30) {
        insight = 'It\'s quite hot outside. Stay hydrated and wear light clothing!';
    } else if (weatherData.main.temp < 10) {
        insight = 'It\'s cold outside. Make sure to wear warm clothes!';
    } else {
        insight = 'The weather is pleasant. Enjoy your day!';
    }

    aiInsight.innerHTML = `<h3>AI Weather Insight:</h3><p>${insight}</p>`;
}

// Update fetchWeatherData function to include AI Insight
