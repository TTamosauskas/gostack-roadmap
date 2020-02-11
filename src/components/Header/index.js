import React from "react";

import { Container } from "./styles";

import clube from "../../assets/logo.png";

export default function Header() {
  return (
    <Container>
      <img src={clube} alt="Clube do Valor" />
    </Container>
  );
}
