import React, { useState } from 'react';
import {BrowserRouter,Routes,Route}from  "react-router-dom";
import FirstPage from './Firstpage';
import SecondPage from  './Secondpage';
import './App.css';
import Counter from './Counter';
import Action from './navbar_components/Action';
import Adventure from './navbar_components/Adventure';
import Free from './navbar_components/Free';
import GamePage from './GamePage';

function App() {
  const [showSecondPage, setShowSecondPage] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<div className='app-container'><FirstPage setShowSecondPage={setShowSecondPage} />{showSecondPage && <SecondPage  setShowSecondPage={setShowSecondPage} />} </div>} />
        <Route path="/home" element={<div className='app-container'><SecondPage /></div>}/>
        <Route path="/action" element={<Action/>}/>
        <Route path="/adventure" element={<Adventure/>}/>
        <Route path="/Free" element={<Free/>}/>
        <Route path="/gp/:gameId" element={<GamePage />} /> {/* Add the gp route with gameId parameter  "/gp/:gameId"  */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
