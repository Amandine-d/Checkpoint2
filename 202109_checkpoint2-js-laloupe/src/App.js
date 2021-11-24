import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import GameList from './GameList/GameList';
import GameDetails from './GameDetail/GameDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<GameList />} />
          <Route path='/games/:id' element={<GameDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
