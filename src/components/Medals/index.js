import React, {useEffect, useState} from "react";

import { Container } from "./styles";

import initialStateGoals from "../../goals";

export default function Medals() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    // Busca um item chamado `goals` no LocalStorage
    const storageGoals = localStorage.getItem('goals');
    
    // Caso exista no LocalStorage o item 'goals', ele irá dar um parse e setar o estado como o resultado obtido
    if (storageGoals) {
      setGoals(JSON.parse(storageGoals));
    // Caso não haja, ele irá setar o estado inicial de `goals` (arquivo externo)
    }
  }, []);

  
  return (
    <Container>
      <div id="quadro-de-medalhas">
            <h3> Quadro de Medalhas: </h3>
            {console.log(goals[1].active)} 
            <h5><span>😍</span> Boas intenções</h5>
            <h5><span>💰</span> Organizado</h5>
            <h5><span>👍</span> Exterminador de dívidas</h5>
            <h5><span>🐖</span> Poupador Fiel</h5>
            <h5><span>🏆</span> Pronto para Emergências </h5>
            <h5><span>♻️</span> Gerador de Caixa</h5>
            <h5><span>👑</span> Investidor Inteligente</h5>
      </div>
  </Container>

  );
}
