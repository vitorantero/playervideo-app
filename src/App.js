import * as React from 'react';
import './App.css';
import Pesquisa from './Componentes/Pesquisa'
import Data from './Componentes/Data';
import Player from './Componentes/Player';
import { useState } from 'react';

function App() {
  const [isVideo, setVideo] = useState({
    videoName: Data[0].videoName,
    videoSrc: Data[0].videoSrc,
    description: Data[0].description,
  });

  return (
    <>
      <header className='header__section'>
        <p className='header__text'>Direção Concursos</p>
      </header>
      
      <div className='Container'>
        <div className='playerDiv'>
        
          <Player Data={isVideo}/>
          <Pesquisa setVideo={setVideo}/>
          
        </div>
      </div>
      
    </>
  );
}

export default App
