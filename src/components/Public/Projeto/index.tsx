import React from 'react';
import { Container } from './styles';
import InterfaceProjeto from './InterfaceProjeto';

export default function Projeto(props: InterfaceProjeto) {
  const { titulo, descricao, git, linkProject } = props;
  return (
    <Container className="pj">
      <h1>{titulo}</h1>
      <p>{descricao}</p>
      <button className="btn-git-net">
        <a href={git} target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </button>
      <button className="btn-git-net">
        <a href={linkProject}>
          <i className="fas fa-window-restore"></i>
        </a>
      </button>
    </Container>
  );
}
