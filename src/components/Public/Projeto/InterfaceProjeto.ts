import { Props } from 'react';

export default interface ProjetoInterface extends Props<any> {
  titulo: string;
  descricao: string;
  git: string;
  linkProject: string;
}
