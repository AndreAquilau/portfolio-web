import React from 'react';
import SectionFour from '../SectionFour';
import SectionOne from '../SectionOne';
import SectionThree from '../SectionThree';
import SectionTwo from '../SectionTwo';
import { SectionConteudo } from './styles';
import { Route } from 'react-router-dom';

export default function Conteudo(): JSX.Element {
  return (
    <SectionConteudo className="conteudo">
      <Route path="/formacao" exact component={SectionOne} />
      <Route path="/experiencia" exact component={SectionTwo} />
      <Route path="/projetos" exact component={SectionThree} />
      <Route path="/contato" exact component={SectionFour} />
    </SectionConteudo>
  );
}
