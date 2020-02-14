import React, { useState, useEffect } from 'react';

import { MdCheckCircle } from 'react-icons/md';

import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import { toast } from 'react-toastify';

import { Container } from './styles';

import initialStateGoals from '../../goals';

function Badge({ data, goals, setGoals, active }) {
  const DragAndDropComponent = active ? DragDropContainer : DropTarget;

  function Fase2() {
    toast.success('🚀 FASE 2 LIBERADA!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });

    goals[6].locked = false;
    goals[7].locked = false;
    goals[8].locked = false;
    goals[9].locked = false;
    goals[10].locked = false;
    goals[11].locked = false;
  }

  function Fase3() {
    toast.success('🚀 FASE 3 LIBERADA!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });

    goals[12].locked = false;
    goals[13].locked = false;
    goals[14].locked = false;
    goals[15].locked = false;
    goals[16].locked = false;
    goals[17].locked = false;
  }

  function Fase4() {
    toast.success('🚀 FASE 4 LIBERADA!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });

    goals[13].locked = false;
    goals[14].locked = false;
    goals[15].locked = false;
    goals[16].locked = false;
    goals[17].locked = false;
    goals[18].locked = false;
  }

  return (
    <Container active={active}>
      <DragAndDropComponent
        targetKey={data.id}
        onDrop={() => {
          const newState = goals.map(goal => {
            if (goal.id === data.id) {
              // FASES

              if (goal.id === 3) {
                toast('🥇 Aquiririu Medalha Maratonista 🏃', {
                  position: 'top-right',
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }

              if (goal.id === 5) {
                toast('🥇 Aquiririu Medalha Boas Intenções 😍', {
                  position: 'top-right',
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }

              if (goal.id === 6) {
                Fase2();
              }

              if (goal.id === 7) {
                toast('🥇 Aquiririu a Medalha Aluno Dedicado 👨‍🎓', {
                  position: 'top-right',
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }

              if (goal.id === 9) {
                toast('🥇 Aquiririu a Medalha Super Organizado 💰', {
                  position: 'top-right',
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }

              if (goal.id === 10) {
                toast('🥇 Aquiririu a Medalha Poupador Fiel 🐖', {
                  position: 'top-right',
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }

              if (goal.id === 11) {
                toast('🥇 Aquiririu a Medalha Nome Limpo 👍', {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }

              if (goal.id === 12) {
                Fase3();
              }

              if (goal.id === 13) {
                toast('🥇 Aquiririu a Medalha Pronto para Voar 🏆', {
                  position: 'top-right',
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }

              if (goal.id === 14) {
                toast('🥇 Aquiririu a Medalha Gerador de Caixa ♻️', {
                  position: 'top-right',
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }

              if (goal.id === 18) {
                Fase4();
              }

              if (goal.id === 20) {
                toast('🥇 Aquiririu a Medalha Investidor Inteligente 👑', {
                  position: 'top-right',
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }

              if (goal.id === 24) {
                toast('🥇 Aquiririu a Medalha Disciplina Jedi 😎', {
                  position: 'top-right',
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }

              if (goal.id === 30) {
                toast('🥇 Aquiririu a Medalha Liberdade Financeira 😎', {
                  position: 'top-right',
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }

              return {
                ...goal,
                active: true,
                locked: false,
              };
            }

            return goal;
          });

          setGoals(newState);
        }}
      >
        {data.locked === false ? (
          <div className={`${'badge-container' + ' bdg-'}${data.id}`}>
            {' '}
            <div>
              {' '}
              <label>{data.id}</label>{' '}
              {active && <MdCheckCircle size={24} color="#2d5a35" />}{' '}
            </div>{' '}
            <p>{data.description}</p>{' '}
          </div>
        ) : (
          ''
        )}
      </DragAndDropComponent>
    </Container>
  );
}

export default Badge;
