import React, { Props } from 'react';
import UsuarioAPI from './Usuario';

export type Redesocial = {
  id?: string;
  link?: string;
  uploadIconLink: string;
  created?: Date;
  updated?: Date;
  usuario?: UsuarioAPI;
};

export default interface RedeSocialAPI extends Props<any> {
  redesociais?: Redesocial[];
  updateComponent: () => any;
}
