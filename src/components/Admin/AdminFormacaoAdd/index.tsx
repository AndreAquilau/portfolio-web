import React, { useEffect, useState } from 'react';
import { btnAdd, btnRefresh, btnSave } from '../../../assets';
import FormacaoAPI from '../../../interface/Formacao';
import { Formacao } from '../../../interface/Formacao';
import api from '../../../services/api';
import { Container } from './styles';

export default function AdminFormacaoAdd(props: FormacaoAPI) {
  const [getFormacao, setFormacao]: [Formacao | undefined, (param: any) => any] = useState();
  const token = process.env.TOKEN;

  return (
    <Container id="sec1">
      <div className="form-formacao_titulo">
        <h1>
          <i className="fas fa-user-tie"></i>Formação
        </h1>
      </div>

      <section className="documentos">
        <div className="formacao">
          <form action="" method="post" className="form-formacao">
            <div className="form-formacao_container">
              <div className="form-formacao_item">
                <input
                  type="text"
                  value={getFormacao?.descFormacao}
                  onChange={(e) => {
                    const newFormacoes = { ...getFormacao };
                    newFormacoes.descFormacao = e.target.value;
                    setFormacao(newFormacoes);
                  }}
                  placeholder="Digite sua formacão..."
                />
              </div>
              <div className="form-formacao_item">
                <input
                  type="text"
                  value={getFormacao?.instituicao}
                  onChange={(e) => {
                    const newFormacoes = { ...getFormacao };
                    newFormacoes.instituicao = e.target.value;
                    setFormacao(newFormacoes);
                  }}
                  placeholder="Digite a instituição..."
                />
                <button
                  type="button"
                  onClick={(e) => {
                    api
                      .post(
                        `/formacao/`,
                        { descFormacao: getFormacao?.descFormacao, instituicao: getFormacao?.instituicao },
                        {
                          headers: {
                            Authorization: JSON.parse(localStorage.getItem('tokenPortfolio') || ''),
                          },
                        },
                      )
                      .then((res) => {
                        console.log(res);

                        props.updateComponent();
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  <img src={btnAdd} alt="" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Container>
  );
}
