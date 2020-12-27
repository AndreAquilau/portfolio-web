import React, { Props } from 'react';
import UsuarioAPI from './Usuario';

export type Projeto = {
  id?: string;
  titulo?: string;
  descProjeto?: string;
  linkGithub?: string;
  linkProjeto?: string;
  created?: Date;
  updated?: Date;
  usuario?: UsuarioAPI;
};

export default interface ProjetoAPI extends Props<any> {
  projetos?: Projeto[];
  updateComponent: (param?: any[]) => any;
}
