import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';  // Optionnel si tu as des styles globaux à importer
import App from './App.js';  // Importation du composant principal

// Créer la racine de React et rendre l'application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
