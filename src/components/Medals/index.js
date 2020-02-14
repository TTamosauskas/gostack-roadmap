import React from 'react';

import { Container } from './styles';

export default function Medals({ goals }) {
  return (
    <Container>
      <div id="quadro-de-medalhas">
        <h3> Quadro de Medalhas: </h3>
        {goals.map(goal => {
          if (goal.active === true && goal.id === 3) {
            return (
              <h4>
                <span>🏃</span> Maratonista
              </h4>
            );
          }
          if (goal.active === true && goal.id === 5) {
            return (
              <h4>
                <span>😍</span> Boas intenções
              </h4>
            );
          }
          if (goal.active === true && goal.id === 7) {
            return (
              <h4>
                <span>💰</span> Aluno dedicado
              </h4>
            );
          }
          if (goal.active === true && goal.id === 9) {
            return (
              <h4>
                <span>👨‍🎓 </span> Super Organizado
              </h4>
            );
          }
          if (goal.active === true && goal.id === 10) {
            return (
              <h4>
                <span>🐖</span> Poupador Fiel
              </h4>
            );
          }
          if (goal.active === true && goal.id === 11) {
            return (
              <h4>
                <span>👍</span> Nome Limpo
              </h4>
            );
          }
          if (goal.active === true && goal.id === 13) {
            return (
              <h4>
                <span>🏆</span> Pronto para Voar
              </h4>
            );
          }
          if (goal.active === true && goal.id === 14) {
            return (
              <h4>
                <span>♻️</span> Gerador de Caixa
              </h4>
            );
          }
          if (goal.active === true && goal.id === 20) {
            return (
              <h4>
                <span>👑</span> Investidor Inteligente
              </h4>
            );
          }

          if (goal.active === true && goal.id === 24) {
            return (
              <h4>
                <span>😎</span> Disciplina Jedi
              </h4>
            );
          }
          if (goal.active === true && goal.id === 30) {
            return (
              <h4>
                <span>🤑</span> Liberdade Financeira
              </h4>
            );
          }
        })}
      </div>
    </Container>
  );
}
