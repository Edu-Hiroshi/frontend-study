import React from "react";
import Result from "./Result";

const results = ['Resultado 1', 'Resultado 2', 'Resultado 3', 'Resultado 4', 'Resultado 5'];

const ResultList = () => (
  <div  style={{ gridRow: 2, gridColumn: 2}}>
    {results.map((result) => (
      <Result tittle={result} />
    ))}
  </div>
);

export default ResultList;