import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import Games from './screens/Games'
import DetailsGame from './screens/DetailsGame'
import App from "./screens/App"
import Loading from './components/Loading';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Games />}></Route>
        <Route path="/game/:gameid" element={<DetailsGame />} />
      </Routes>
    </BrowserRouter >
  </React.StrictMode>
);



