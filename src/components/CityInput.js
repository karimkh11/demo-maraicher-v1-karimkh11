import React, { useState } from 'react';

function CityInput({ getWeather }) {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = () => {
    if (city.trim()) {
      getWeather(city);
      setCity(''); // Réinitialiser l'input après la recherche
    } else {
      alert('Veuillez entrer une ville.');
    }
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Entrez le nom de la ville"
        value={city}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Obtenir la météo</button>
    </div>
  );
}

export default CityInput;
