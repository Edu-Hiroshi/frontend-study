import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import ResultList from './components/ResultList';
import FloatingCard from './components/FloatingCard';
import ResultControls from './components/ResultControls';

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


        <input onChange={handleChange}/>
        
        <button onClick={handleClick}>
          pesquisar
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateRows: '1fr auto'}}>
        <ResultControls/>
        <ResultList/>
        <div style={{ gridRow: 2, gridColumn: 3}}>
          <FloatingCard />
        </div>
      </div>
    </div>
  );
};
  
export default App;
