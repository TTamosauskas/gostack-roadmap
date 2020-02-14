import React, { useState, useEffect } from 'react';

import Header from '../Header';
import Badge from '../Badge';
import BadgePicker from '../BadgePicker';

import { Container, RoadMap } from './styles';

import initialStateGoals from '../../goals';

function Map() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    // Busca um item chamado `goals` no LocalStorage
    const storageGoals = localStorage.getItem('goals');

    // Caso exista no LocalStorage o item 'goals', ele irá dar um parse e setar o estado como o resultado obtido
    if (storageGoals) {
      setGoals(JSON.parse(storageGoals));
      // Caso não haja, ele irá setar o estado inicial de `goals` (arquivo externo)
    } else {
      setGoals(initialStateGoals);
    }
  }, []);

  useEffect(() => {
    // Acompanhando as mudanças na variável `goals` (array abaixo), sempre que for alterado, ele irá armazenar no LocalStorage o componente.
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  // Botão temporário para limpar o localstorage
  function clearCache() {
    // Irá setar o item `goals` do LocalStorage como o estado inicial (arquivo externo)
    localStorage.setItem('goals', initialStateGoals);
    // Irá setar no componente para renderização em tela
    setGoals(initialStateGoals);
  }

  return (
    <div>
      <Header />

      <Container>
        <RoadMap>
          {goals.map(goal => (
            <Badge
              key={goal.id}
              data={goal}
              goals={goals}
              setGoals={setGoals}
              active={goal.active}
              locked={goal.locked}
            />
          ))}
        </RoadMap>

        <BadgePicker data={goals} goals={goals} setGoals={setGoals} />
      </Container>
      {/* Botão para limpar o cache */}
      <button
        onClick={clearCache}
        style={{
          color: '#FFF',
          marginTop: 20,
          marginLeft: 30,
          fontWeight: 'bold',
        }}
      >
        Zerar conquistas
      </button>
    </div>
  );
}

export default Map;
