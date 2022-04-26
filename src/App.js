import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import ResultList from './components/ResultList';
import FloatingCard from './components/FloatingCard';

function App() {
  const [descricao, setDescricao] = useState('pesquisa');
  const [pesquisa, setPesquisa] = useState();

  useEffect(() => {
    alert('Atualizacao!');
  }, [descricao, pesquisa]) // como é um array, podem ter main

  const handleClick = useCallback(() => {
    console.log ('OK - clicado');

    setDescricao ('pesquisado');
  }, [setDescricao]);

  const handleChange = useCallback ((event) => {
    console.log ('OK - pesquisado');
    
    setPesquisa (event);
    console.log(event.target.value);
  }, []);

  // input com a condicao onChange{handleChange}

  return (
    <div>
      <div>
        {descricao}
        <button onClick={handleClick}>
          pesquisar
        </button>
        <input onChange={handleChange}>
          local de pesquisa
        </input>
        
      </div>

      <div style={{ display: 'grid', gridTemplateRows: '1fr auto'}}>
        <div>
          <div>Localização</div>
          <div>Safe</div>
          <div>Time</div>
        </div>
        
        <ResultList/>
        
        <div style={{ gridRow: 2, gridColumn: 3}}>
          <FloatingCard />
        </div>

      </div>

    </div>

  );
  
};
  

export default App;
