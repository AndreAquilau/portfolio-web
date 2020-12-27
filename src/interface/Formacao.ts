import React, { Props } from 'react';
import UsuarioAPI from './Usuario';

export type Formacao = {
  id?: string;
  descFormacao?: string;
  instituicao?: string;
  created?: Date;
  updated?: Date;
  usuario?: UsuarioAPI;
};

export default interface FormacaoAPI extends Props<any> {
  formacaos?: Formacao[];
  updateComponent: (props?: any) => any;
}
