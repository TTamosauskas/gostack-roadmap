import React from 'react';
import { MdCheckCircle } from 'react-icons/md';

import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import { toast } from 'react-toastify';

import { Container } from './styles';

export default function Badge({ data, goals, setGoals, active }) {
  const DragAndDropComponent = active ? DragDropContainer : DropTarget;

  return (
    <Container active={active}>
      <DragAndDropComponent
        targetKey={data.id}
        onDrop={() => {
          const newState = goals.map(goal => {
            if (goal.id === data.id) {
              // FASES

              if (goal.id === 6) {
                toast('🥇 Aquiririu Medalha Boas Intenções 😍', {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }

              if (goal.id === 12) {
                alert('FASE 2 COMPLETA!');
              }
              if (goal.id === 18) {
                alert('FASE 2 COMPLETA!');
              }
              if (goal.id === 21) {
                alert('FASE 2 COMPLETA!');
              }

              return {
                ...goal,
                active: true,
              };
            }

            return goal;
          });

          setGoals(newState);
        }}
      >
        <div className={`${'badge-container' + ' bdg-'}${data.id}`}>
          <div>
            <label>{data.id}</label>
            {active && <MdCheckCircle size={24} color="#2d5a35" />}
          </div>

          <p>{data.description}</p>
        </div>
      </DragAndDropComponent>
    </Container>
  );
}
