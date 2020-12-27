import React, { useEffect, useState } from 'react';
import { btnDelete, btnRefresh, btnSave } from '../../../assets';
import FormacaoAPI from '../../../interface/Formacao';
import { Formacao } from '../../../interface/Formacao';
import api from '../../../services/api';
import AdminFormacaoAdd from '../AdminFormacaoAdd';
import { Container } from './styles';

export default function AdminFormacao(props: FormacaoAPI) {
  const [getFormacoes, setFormacoes]: [Formacao[] | undefined, (param: any) => any] = useState();
  const token = process.env.TOKEN;
  useEffect(() => {
    setFormacoes(props.formacaos);
  }, [props.formacaos, getFormacoes]);

  const formacoes = getFormacoes?.map((element, index, array) => {
    return (
      <>
        <section className="documentos" key={element.id}>
          <div className="formacao">
            <form action="" method="post" className="form-formacao">
              <div className="form-formacao_container">
                <div className="form-formacao_item">
                  <div>
                    <label htmlFor="">Formacão: </label>
                  </div>
                  <input
                    type="text"
                    value={getFormacoes[index].descFormacao}
                    onChange={(e) => {
                      const newFormacao = [...getFormacoes];
                      newFormacao[index].descFormacao = e.target.value;
                      setFormacoes(newFormacao);
                    }}
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      api
                        .put(
                          `/formacao/formacao/?id=${getFormacoes[index].id}`,
                          { descFormacao: getFormacoes[index].descFormacao },
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
                    <img src={btnRefresh} alt="" />
                  </button>
                </div>
                <div className="form-formacao_item">
                  <div>
                    <label htmlFor="">Instituição: </label>
                  </div>
                  <input
                    type="text"
                    value={getFormacoes[index].instituicao}
                    onChange={(e) => {
                      const newFormacao = [...getFormacoes];
                      newFormacao[index].instituicao = e.target.value;
                      setFormacoes(newFormacao);
                    }}
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      api
                        .put(
                          `/formacao/instituicao/?id=${getFormacoes[index].id}`,
                          { instituicao: getFormacoes[index].instituicao },
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
                    <img src={btnRefresh} alt="" />
                  </button>
                  <button
                    className="btn-delete"
                    type="button"
                    onClick={(e) => {
                      api
                        .delete(`/formacao/?id=${getFormacoes[index].id}`, {
                          headers: {
                            Authorization: JSON.parse(localStorage.getItem('tokenPortfolio') || ''),
                          },
                        })
                        .then((res) => {
                          console.log(res);

                          props.updateComponent();
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  >
                    <img src={btnDelete} alt="" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  });
  return (
    <>
      <AdminFormacaoAdd updateComponent={props.updateComponent}></AdminFormacaoAdd>
      <Container id="sec1">
        {React.Children.map(formacoes, (element) => {
          return React.cloneElement(element as React.ReactElement);
        })}
      </Container>
    </>
  );
}
