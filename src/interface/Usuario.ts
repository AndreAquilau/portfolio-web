import React, { Props } from 'react';
import ContatoAPI from './Contato';
import EnderecoAPI from './Endereco';
import ExperienciaAPI from './Experiencia';
import PortfolioAPI from './Portifolio';
import FormacaoAPI from './Formacao';
import ProjetoAPI from './Projeto';
import RedeSocialAPI from './RedeSocial';

export default interface UsuarioAPI extends Props<any> {
  usuarios?: {
    id?: string;
    admin?: boolean;
    nome?: string;
    created?: Date;
    updated?: Date;
    portfolio?: PortfolioAPI;
    contatos?: ContatoAPI[];
    enderecos?: EnderecoAPI[];
    experiencias?: ExperienciaAPI[];
    formacoes?: FormacaoAPI[];
    projetos?: ProjetoAPI[];
    redeSociais?: RedeSocialAPI[];
  };
}
