import React from 'react';

function WeatherResults({ weatherData, onDelete }) {
  return (
    <div className="weather-result">

      <h2>{weatherData.name}, {weatherData.sys.country}</h2>
      <p>Température: {weatherData.main.temp}°C</p>
      <p>Conditions: {weatherData.weather[0].description}</p>
      <p>Humidité: {weatherData.main.humidity}%</p>
      <button onClick={onDelete}>Supprimer</button> {/* Bouton de suppression */}
    </div>
  );
}

export default WeatherResults;
