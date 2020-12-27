import React, { Props } from 'react';
import UsuarioAPI from './Usuario';

export default interface ContatoAPI extends Props<any> {
  contatos?: {
    id?: string;
    tipo?: string;
    conteudo?: string;
    created?: Date;
    updated?: Date;
    usuario?: UsuarioAPI;
  };
}
