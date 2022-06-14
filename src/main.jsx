import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import MainPage from './screens/MainPage'
import DetailsGame from './screens/DetailsGame'
import GamesRanking from './screens/GamesRanking'
import GamesRating from './screens/GamesRating'
import GamesTrending from './screens/GamesTrending'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MainPage />} ></Route>
        <Route path="ranking" exact element={<GamesRanking />} />
        <Route path="rating" exact element={<GamesRating />} />
        <Route path="trending" exact element={<GamesTrending />} />
        <Route path="/game/:gameid" element={<DetailsGame />} />
      </Routes>
    </BrowserRouter >
  </React.StrictMode>
);



