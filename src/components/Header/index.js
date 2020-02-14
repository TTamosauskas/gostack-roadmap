import React from 'react';

import { Container } from './styles';

import clube from '../../assets/logo2.png';

export default function Header() {
  return (
    <Container>
      <img width="100px" src={clube} alt="Clube do Valor" />
    </Container>
  );
}
