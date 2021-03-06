import React, { Props, useEffect, useState } from 'react';
import api from '../../services/api';

import Header from '../../components/Public/Header';
import { Container, SectionAdmin } from './styles';
import { Redirect } from 'react-router-dom';

export default function Login(): JSX.Element {
  const [getUsuario, setUsuario]: [string | undefined, (param: any) => any] = useState();
  const [getSenha, setSenha]: [string | undefined, (param: any) => any] = useState();
  const [getLogado, setLogado]: [boolean | undefined, (param: any) => any] = useState(false);

  function postProjetoRequest() {
    api
      .post('/login', { usuario: getUsuario, senha: getSenha })
      .then(async (response) => {
        const token = JSON.stringify(response.data.token);
        localStorage.setItem(process.env.REACT_APP_BASE_URL || '', token);
        setLogado(true);
      })
      .catch((err) => {
        alert(`Error get portfolio ${err.message}`);
      });
  }

  return (
    <>
      {JSON.parse(localStorage.getItem(String(process.env.REACT_APP_BASE_URL)) || 'false') && (
        <Redirect to="painelcontroll"></Redirect>
      )}
      {getLogado && <Redirect to="painelcontroll"></Redirect>}
      <Container>
        <Header></Header>
        <SectionAdmin>
          <form action="/login" method="post">
            <div>
              <label htmlFor="">Usuário</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Digite seu usuário"
                onChange={(e) => {
                  const el = e.target.value as string;
                  setUsuario(el);
                }}
              />
            </div>
            <div>
              <label htmlFor="">Senha</label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Digite sua senha"
                onChange={(e) => {
                  const el = e.target.value as string;
                  setSenha(el);
                }}
              />
            </div>
            <div className="btn-login">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  postProjetoRequest();
                }}
              >
                Login
              </button>
            </div>
          </form>
        </SectionAdmin>
      </Container>
    </>
  );
}
