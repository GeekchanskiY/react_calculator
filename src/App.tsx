import React from 'react';
import logo from './logo.svg';
import { Calculator } from './components/calculator/Calculator';
import './App.css';

function App() {
  const initvalue1: Number = new Number(1)

  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
