import React from "react";

import { Container, GoHome } from "./styles";

export default function Header() {
  return (
    <Container>
      <GoHome
        title="Voltar para a org dashboard"
        href="/organizations/295271"
        tabindex="0"
      >
        <img
          alt="Pipefy"
          src="https://pipestyle.staticpipefy.com/default/images/logo-white.svg"
          width="90"
          height="30"
        />
      </GoHome>
    </Container>
  );
}
