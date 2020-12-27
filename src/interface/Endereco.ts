import React, { Props } from 'react';
import UsuarioAPI from './Usuario';

export default interface EnderecoAPI extends Props<any> {
  enderecos?: {
    id?: string;
    rua?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    numero?: string;
    created?: Date;
    updated?: Date;
    usuario?: UsuarioAPI;
  };
}
