import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SectionFour from '../components/Public/SectionFour';
import SectionOne from '../components/Public/SectionOne';
import SectionThree from '../components/Public/SectionThree';
import SectionTwo from '../components/Public/SectionTwo';
import Home from '../view/Home';
import Login from '../view/Login';
import PainelControll from '../view/PainelControll';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/formacao" exact component={Home} />
        <Route path="/experiencia" exact component={Home} />
        <Route path="/projetos" exact component={Home} />
        <Route path="/contato" exact component={Home} />
        <Route path="/painelcontroll" exact component={PainelControll} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
