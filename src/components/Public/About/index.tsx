import React, { useState, useEffect, Props } from 'react';
import { Link } from 'react-router-dom';
import { eu } from '../../../assets';
import PortfolioAPI from '../../../interface/Portifolio';
import { Redesocial } from '../../../interface/RedeSocial';
import UsuarioAPI from '../../../interface/Usuario';
import api from '../../../services/api';
import { Container } from './styles';

interface PortfolioInterface extends Props<any> {
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
}


export default function About(): JSX.Element {
  const [getPortfolio, setPortifolio]: [PortfolioInterface | undefined, (param: any) => any] = useState();
  const [getLinks, setLinks]: [Redesocial[] | undefined, (param: any) => any] = useState();
  console.log(`${process.env.REACT_APP_API_STATICS}/${getPortfolio?.fileNamePhoto}`)
  const redesociais = getLinks?.map((el, index, array) => {
    return (
      <>
         <a href={el.link} target="_blank">
          <img src={`${process.env.REACT_APP_API_STATICS}/${el.uploadIconLink}`} alt=""/>
        </a>
      </>
    )
  })

  useEffect(() => {
    api
    .get('/portfolio')
    .then((response) => {
      console.log(response.data.portfolios[0])
      setPortifolio(response.data.portfolios[0]);
    })
    .catch((err) => {
      alert(`Error get portfolio ${err.message}`);
    });

    api
    .get('/redesocial')
    .then((response) => {
      setLinks(response.data.redesociais);
    })
    .catch((err) => {
      alert(`Error get portfolio ${err.message}`);
    });

  }, []);

  return (
    <Container className="about">
      <div>
        <img src={`${process.env.REACT_APP_API_STATICS}/${getPortfolio?.photo}`} alt={getPortfolio?.photo} />
      </div>
      <div className="apresentar">
        <h1>{getPortfolio?.titulo}</h1>
        <h2>{getPortfolio?.subtitulo}</h2>
      </div>
      <div className="descricao">
        <p>
          {getPortfolio?.sobre}
        </p>
      </div>
      <div className="cartao">
        <a href={`${process.env.REACT_APP_API_STATICS}/${getPortfolio?.uploadDocSobre}`}  download="Cartão de visita">
          <i className="fas fa-download"></i> Faça o dowload do meu cartão virtual.
        </a>
      </div>
      <div className="redes">

       {React.Children.map(redesociais, (el) => {
        return React.cloneElement(el as React.ReactElement);
      })}

      </div>
    </Container>
  );
}
