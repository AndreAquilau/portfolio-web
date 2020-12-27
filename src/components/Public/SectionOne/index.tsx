import React, { useEffect, useState } from 'react';
import { Formacao } from '../../../interface/Formacao';
import api from '../../../services/api';
import { Container } from './styles';

export default function SectionOne() {
  const [getFormacoes, setFormacoes]: [Formacao[] | undefined, (param: any) => any] = useState();

  const formacoes = getFormacoes?.map((element, index, array) => {
    return (
      <>
        <hr/>
       <section className="documentos">
        <h1>Curso: {element.descFormacao}</h1>
        <h3>Instituição: {element.instituicao}</h3>
       </section>
      </>
    );
  });
  useEffect(() => {
    api
      .get('/formacao')
      .then((response) => {
        setFormacoes(response.data.formacaos);
      })
      .catch((err) => {
        alert(`Error get portfolio ${err.message}`);
      });
  }, [])
  return (
    <Container id="sec1">
      <h1>
        <i className="fas fa-user-tie"></i>Formação
      </h1>
      <section className="documentos">
      {React.Children.map(formacoes, (element) => {
          return React.cloneElement(element as React.ReactElement);
        })}
      </section>
    </Container>
  );
}
