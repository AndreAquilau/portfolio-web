import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
  return (
    <Container>
      <nav className="navbar">
        <ul className="lista">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/formacao">Formação</Link>
          </li>
          <li>
            <Link to="/experiencia">Experiência</Link>
          </li>
          <li>
            <Link to="/projetos">Projetos</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          { JSON.parse(localStorage.getItem('tokenPortfolio') || '') &&
          <li>
            <Link to="/painelcontroll">Settings</Link>
          </li>
          }
          <li>
            {
              JSON.parse(localStorage.getItem('tokenPortfolio') || '{"tokenPortfolio": false}') ?
              <Link to="/login" onClick={(e) => {
                localStorage.setItem('tokenPortfolio', JSON.stringify(false));
              }}>Logout</Link> : <Link to="/login">Login</Link>}
          </li>
        </ul>
      </nav>
    </Container>
  );
}
