import React, { Props, useEffect, useState } from 'react';
import AdminExperiencia from '../../components/Admin/AdminExperiencia';
import AdminFormacao from '../../components/Admin/AdminFormacao';
import AdminPortfolio from '../../components/Admin/AdminPortfolio';
import AdminProjeto from '../../components/Admin/AdminProjeto';
import api from '../../services/api';
import { Redirect } from 'react-router-dom';

import AdminRedeSocial from '../../components/Admin/AdminRedeSocial';
import Header from '../../components/Public/Header';
import { Container, SectionAdmin } from './styles';

export default function PainelControll(): JSX.Element {
  const [getPortfolio, setPortifolio]: any = useState();
  const [getRedeSocial, setRedeSocial]: any = useState();
  const [getFormacao, setFormacao]: any = useState();
  const [getExperiencia, setExperiencia]: any = useState();
  const [getProjeto, setProjeto]: any = useState();

  useEffect(() => {
    getPortfolioRequest();
    getRedeSocialRequest();
    getFormacaoRequest();
    getExperienciaRequest();
    getProjetoRequest();
  }, []);

  function getPortfolioRequest() {
    api
      .get('/portfolio')
      .then((response) => {
        setPortifolio(response.data.portfolios[0]);
      })
      .catch((err) => {
        alert(`Error get portfolio ${err.message}`);
      });
  }

  function getRedeSocialRequest() {
    api
      .get('/redesocial')
      .then((response) => {
        setRedeSocial(response.data.redesociais);
      })
      .catch((err) => {
        alert(`Error get portfolio ${err.message}`);
      });
  }

  function getFormacaoRequest() {
    api
      .get('/formacao')
      .then((response) => {
        setFormacao(response.data.formacaos);
      })
      .catch((err) => {
        alert(`Error get portfolio ${err.message}`);
      });
  }

  function getExperienciaRequest() {
    api
      .get('/experiencia')
      .then((response) => {
        setExperiencia(response.data.experiencias);
      })
      .catch((err) => {
        alert(`Error get portfolio ${err.message}`);
      });
  }

  function getProjetoRequest() {
    api
      .get('/projeto')
      .then((response) => {
        setProjeto(response.data.projetos);
      })
      .catch((err) => {
        alert(`Error get portfolio ${err.message}`);
      });
  }

  return (
    <>
      {!JSON.parse(localStorage.getItem('tokenPortfolio') || 'false') && <Redirect to="/login"></Redirect>}
      <Container>
        <Header></Header>
        <SectionAdmin>
          <AdminPortfolio portfolio={getPortfolio} updateComponent={getPortfolioRequest}></AdminPortfolio>
          <AdminRedeSocial updateComponent={getRedeSocialRequest} redesociais={getRedeSocial}></AdminRedeSocial>
          <AdminFormacao updateComponent={getFormacaoRequest} formacaos={getFormacao}></AdminFormacao>
          <AdminExperiencia updateComponent={getExperienciaRequest} experiencias={getExperiencia}></AdminExperiencia>
          <AdminProjeto updateComponent={getProjetoRequest} projetos={getProjeto}></AdminProjeto>
        </SectionAdmin>
      </Container>
    </>
  );
}
