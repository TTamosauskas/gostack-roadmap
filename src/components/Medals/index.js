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
              <p>
                <span>🏃</span> Levando a sério
              </p>
            );
          }
          if (goal.active === true && goal.id === 5) {
            return (
              <p>
                <span>😍</span> Boas intenções
              </p>
            );
          }
          if (goal.active === true && goal.id === 7) {
            return (
              <p>
                <span>💰</span> Aluno dedicado
              </p>
            );
          }
          if (goal.active === true && goal.id === 9) {
            return (
              <p>
                <span>👨‍🎓 </span> Super Organizado
              </p>
            );
          }
          if (goal.active === true && goal.id === 10) {
            return (
              <p>
                <span>🐖</span> Poupador Fiel
              </p>
            );
          }
          if (goal.active === true && goal.id === 11) {
            return (
              <p>
                <span>👍</span> Nome Limpo
              </p>
            );
          }
          if (goal.active === true && goal.id === 13) {
            return (
              <p>
                <span>🏆</span> Pronto para Voar
              </p>
            );
          }
          if (goal.active === true && goal.id === 14) {
            return (
              <p>
                <span>♻️</span> Gerador de Caixa
              </p>
            );
          }
          if (goal.active === true && goal.id === 20) {
            return (
              <p>
                <span>👑</span> Investidor Inteligente
              </p>
            );
          }

          if (goal.active === true && goal.id === 24) {
            return (
              <p>
                <span>😎</span> Disciplina Jedi
              </p>
            );
          }
          if (goal.active === true && goal.id === 30) {
            return (
              <p>
                <span>🤑</span> Liberdade Financeira
              </p>
            );
          }
        })}
      </div>
    </Container>
  );
}
