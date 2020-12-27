import React, { Props } from 'react';
import UsuarioAPI from './Usuario';

export type Experiencia = {
  id?: string;
  descExperiencia?: string;
  created?: Date;
  updated?: Date;
  usuario?: UsuarioAPI;
};

export default interface ExperienciaAPI extends Props<any> {
  experiencias?: Experiencia[];
  updateComponent: (param?: any) => any;
}
