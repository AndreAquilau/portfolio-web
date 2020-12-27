import React, { useEffect, useState } from 'react';
import Projeto from '../Projeto';
import { Container } from './styles';
import ProjetoAPI, { Projeto as Pj } from '../../../interface/Projeto';
import api from '../../../services/api';

export default function SectionThree(): JSX.Element {
  const [getProjetos, setProjetos]: [Pj[] | undefined, (args?: any[]) => any] = useState();

  const projetos = getProjetos?.map((element, index, array) => {
    return (
      <>
        <Projeto
          titulo={element.titulo || ''}
          descricao={element.descProjeto || ''}
          git={element.linkGithub || ''}
          linkProject={element.linkProjeto || ''}
        ></Projeto>
      </>
    );
  });
  useEffect(() => {
    api
    .get('/projeto')
    .then((response) => {
      setProjetos(response.data.projetos);
    })
    .catch((err) => {
      alert(`Error get portfolio ${err.message}`);
    });
  }, [])

  return (
    <Container id="sec3">
      <h1>
        <i className="fas fa-folder"></i>Projetos
      </h1>
      <section className="projetos">
      {React.Children.map(projetos, (element) => {
            return React.cloneElement(element as React.ReactElement);
      })}
      </section>
    </Container>
  );
}
