import React, { useState, useEffect } from "react";

import Header from "../Header";
import Badge from "../Badge";
import BadgePicker from "../BadgePicker";

import { Container, RoadMap } from "./styles";

import initialStateGoals from "../../goals";

function Map() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const storageGoals = localStorage.getItem('goals');
  
    if (storageGoals) {
      setGoals(JSON.parse(storageGoals));
    } else {
      setGoals(initialStateGoals)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  function clearCache() {
    localStorage.setItem('goals', initialStateGoals);
    setGoals(initialStateGoals)
  }

  return (
    <>
      <Header />
      <button onClick={clearCache} style={{color: "#FFF", marginTop: 20, marginLeft: 5, fontWeight: 'bold'}}>
        Zerar
      </button>
      <Container>
      
        <RoadMap>
        
          {goals.map(goal => (
            <Badge
              key={goal.id}
              data={goal}
              goals={goals}
              setGoals={setGoals}
              active={goal.active}
            />
          ))}
        </RoadMap>
        <BadgePicker data={goals} goals={goals} setGoals={setGoals} />
      </Container>
    </>
  );
}

export default Map;
