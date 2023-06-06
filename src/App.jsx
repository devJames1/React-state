import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NewComp from './Components/NewComp';

function App() {
  const styles = {
    fontStyle: 'bold',
    color: 'teal',
  };

  return (
    <div class="App">
      <h1 style={styles}>Welcome</h1>
      <NewComp />
    </div>
  );
}

export default App;
