import React, { Props } from 'react';
import UsuarioAPI from './Usuario';

export default interface ProjetoItemAPI extends Props<any> {
  id?: string;
  titulo?: string;
  descProjeto?: string;
  linkGithub?: string;
  linkProjeto?: string;
  created?: Date;
  updated?: Date;
  usuario?: UsuarioAPI;
}
