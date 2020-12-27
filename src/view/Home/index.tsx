import React, { Props } from 'react';
import About from '../../components/Public/About';
import Conteudo from '../../components/Public/Conteudo';
import Header from '../../components/Public/Header';
import { Container, SectionHome } from './styles';
import { Route } from 'react-router-dom';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header></Header>
      <SectionHome className="home">
        <About></About>
        <Route to="/:title?" exact component={Conteudo}></Route>
      </SectionHome>
    </Container>
  );
}
