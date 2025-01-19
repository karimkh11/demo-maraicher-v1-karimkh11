import React, { useState } from 'react';
import './App.css';
import CityInput from './components/CityInput';
import WeatherResults from './components/WeatherResults';

function App() {
  const [weatherDataList, setWeatherDataList] = useState([]); // Stocker plusieurs résultats
  const [error, setError] = useState(null);

  // Fonction pour récupérer la météo
  async function getWeather(city) {
    if (!city) {
      alert('Veuillez entrer le nom de la ville.');
      return;
    }

    const apiKey = 'd94f285408ec23116e7f93fb8dda26a2';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Erreur de requête: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      // Ajouter le nouveau résultat à la liste
      setWeatherDataList((prevData) => [...prevData, data]);
      setError(null); // Réinitialiser les erreurs
    } catch (error) {
      setError('Erreur lors de la récupération des données météorologiques.');
    }
  }

  // Fonction pour supprimer un résultat de la liste
  const removeWeatherResult = (indexToRemove) => {
    setWeatherDataList((prevData) => prevData.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="App">
      <h1>Recherchez la Météo de Votre Ville</h1>
      <CityInput getWeather={getWeather} />

      {error && <p className="error">{error}</p>}

      {/* Conteneur parent pour regrouper tous les résultats météo */}
      <div className="weather-results-container">
        {weatherDataList.map((weatherData, index) => (
          <WeatherResults
            key={index}
            weatherData={weatherData}
            onDelete={() => removeWeatherResult(index)} // Supprimer le résultat
          />
        ))}
      </div>
    </div>
  );
}

export default App;
