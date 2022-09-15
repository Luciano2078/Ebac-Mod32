import * as React from 'react';
import Button from '@mui/material/Button';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard Title="Meu Painel de Controle" />
    </div>
  );
}

export default App;