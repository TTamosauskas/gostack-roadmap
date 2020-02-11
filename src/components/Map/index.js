import React, { useState, useEffect } from "react";

import Header from "../Header";
import Badge from "../Badge";
import BadgePicker from "../BadgePicker";

import { Container, RoadMap } from "./styles";

import initialStateGoals from "../../goals";

function Map() {
  const [goals, setGoals] = useState();

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    const storageGoals = localStorage.getItem('goals');
  
    if (storageGoals) {
      setGoals(JSON.parse(goals));
    } else {
      setGoals(initialStateGoals)
    }
  }, [goals]);

  if (!goals) {
    return (
      <>
      <h1>Carregando</h1>
    </>
    )
  }

  return (
    <>
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
            />
          ))}
        </RoadMap>
        <BadgePicker data={goals} goals={goals} setGoals={setGoals} />
      </Container>
    </>
  );
}

export default Map;