import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {

    const [image, setImage] = useState();

    useEffect(() => {

      const requsicao = axios.get('https://dog.ceo/api/breeds/image/random');

      requsicao.then((resposta) => {
        setImage(resposta.data.message)
      })

    }, [])

  if (image === undefined) {
    return <h1>Carregando Imagem...</h1>
  }

  return (

    <div className="view">
      <div className="image"> 
      <img src={image} alt="Cachorro Bonito :)" />
      </div>
    </div>
  );
}

export default App;
