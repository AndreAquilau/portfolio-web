import React, { Props } from 'react';
import UsuarioAPI from './Usuario';

export default interface PortfolioAPI extends Props<any> {
  portfolio?: {
    id?: string;
    titulo?: string;
    photo?: string;
    fileNamePhoto?: string;
    subtitulo?: string;
    sobre?: string;
    uploadDocSobre?: string;
    nameDocSobre?: string;
    created?: Date;
    updated?: Date;
    usuario?: UsuarioAPI;
  };
  updateComponent: () => any;
}
