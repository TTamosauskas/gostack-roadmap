import React from 'react';

import { Container } from './styles';

export default function Medals({ goals }) {
  return (
    <Container>
      <div id="quadro-de-medalhas">
        <h3> Quadro de Medalhas: </h3>
        {goals.map(goal => {
          if (goal.active === true && goal.id === 6) {
            return (
              <h5>
                <span>😍</span> Boas intenções
              </h5>
            );
          }
          if (goal.active === true && goal.id === 9) {
            return (
              <h5>
                <span>💰</span> Organizado
              </h5>
            );
          }
          if (goal.active === true && goal.id === 7) {
            return (
              <h5>
                <span>👨‍🎓 </span> Aluno dedicado
              </h5>
            );
          }
          if (goal.active === true && goal.id === 10) {
            return (
              <h5>
                <span>🐖</span> Poupador Fiel
              </h5>
            );
          }
          if (goal.active === true && goal.id === 11) {
            return (
              <h5>
                <span>👍</span> Nome Limpo
              </h5>
            );
          }
          if (goal.active === true && goal.id === 13) {
            return (
              <h5>
                <span>🏆</span> Pronto para Emergências{' '}
              </h5>
            );
          }
          if (goal.active === true && goal.id === 14) {
            return (
              <h5>
                <span>♻️</span> Gerador de Caixa
              </h5>
            );
          }
          if (goal.active === true && goal.id === 20) {
            return (
              <h5>
                <span>👑</span> Investidor Inteligente
              </h5>
            );
          }
        })}
      </div>
    </Container>
  );
}
