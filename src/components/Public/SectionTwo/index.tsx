import React, { useEffect, useState } from 'react';
import { Experiencia } from '../../../interface/Experiencia';
import api from '../../../services/api';
import { Container } from './styles';

export default function SectionTwo(): JSX.Element {
  const [getExperiencia, setExperiencia]: [Experiencia[] | undefined, (param: any) => any] = useState();

  const experiencias = getExperiencia?.map((element, index, array) => {
    return (
      <>
      <section className="xp">
        <div className="local">
          <p>{element.descExperiencia}</p>
        </div>
      </section>
      </>
    );
  });


  useEffect(() => {
    api
    .get('/experiencia')
    .then((response) => {
      setExperiencia(response.data.experiencias);
    })
    .catch((err) => {
      alert(`Error get portfolio ${err.message}`);
    });
  }, [])

  return (
    <Container id="sec2">
      <h1>
        <i className="fas fa-address-book"></i>Experiencia
      </h1>
      <hr/>
      {React.Children.map(experiencias, (element) => {
          return React.cloneElement(element as React.ReactElement);
        })}
    </Container>
  );
}
