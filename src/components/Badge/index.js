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

              if (goal.id === 3) {
                toast('🥇 Aquiririu Medalha Maratonista 🏃', {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }

              if (goal.id === 5) {
                toast('🥇 Aquiririu Medalha Boas Intenções 😍', {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }

              if (goal.id === 7) {
                toast('🥇 Aquiririu a Medalha Aluno Dedicado 👨‍🎓', {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }

              if (goal.id === 9) {
                toast('🥇 Aquiririu a Medalha Super Organizado 💰', {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }

              if (goal.id === 10) {
                toast('🥇 Aquiririu a Medalha Poupador Fiel 🐖', {
                  position: 'top-right',
                  autoClose: 5000,
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

              if (goal.id === 13) {
                toast('🥇 Aquiririu a Medalha Pronto para Voar 🏆', {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }

              if (goal.id === 14) {
                toast('🥇 Aquiririu a Medalha Gerador de Caixa ♻️', {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }

              if (goal.id === 20) {
                toast('🥇 Aquiririu a Medalha Investidor Inteligente 👑', {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }

              if (goal.id === 24) {
                toast('🥇 Aquiririu a Medalha Disciplina Jedi 😎', {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              }

              if (goal.id === 30) {
                toast('🥇 Aquiririu a Medalha Liberdade Financeira 😎', {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
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
