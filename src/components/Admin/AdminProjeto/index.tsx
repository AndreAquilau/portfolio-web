import React, { useEffect, useState } from 'react';
import { btnDelete, btnRefresh, btnSave } from '../../../assets';
import ProjetoAPI, { Projeto as Pj } from '../../../interface/Projeto';
import api from '../../../services/api';
import AdminProjetoAdd from '../AdminProjetoAdd';
import { Container } from './styles';

export default function AdminProjeto(props: ProjetoAPI): JSX.Element {
  const [getProjetos, setProjetos]: [Pj[] | undefined, (args?: any[]) => any] = useState();
  const token = process.env.TOKEN;
  useEffect(() => {
    setProjetos(props.projetos);
  }, [getProjetos, props.projetos]);

  const projetos = getProjetos?.map((element, index, array) => {
    return (
      <>
        <div className="pj">
          <form action="" method="post" className="titulo">
            <label htmlFor="">Título</label>
            <div className="titulo-btn">
              <input
                type="text"
                name=""
                id=""
                value={getProjetos[index]?.titulo}
                onChange={(e) => {
                  const newProjet = [...getProjetos];
                  newProjet[index].titulo = e.target.value;
                  setProjetos([...newProjet]);
                }}
              />
              <button
                type="button"
                onClick={(e) => {
                  api
                    .put(
                      `/projeto/titulo/?id=${getProjetos[index]?.id}`,
                      { titulo: getProjetos[index].titulo },
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
                    .delete(`/projeto/?id=${getProjetos[index].id}`, {
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
          </form>
          <br />
          <div>
            <form action="" method="post" className="projeto_admin">
              <label htmlFor="">Documentação do Projeto</label>
              <div className="bts">
                <textarea
                  name=""
                  id=""
                  cols={90}
                  rows={10}
                  value={getProjetos[index].descProjeto}
                  placeholder={getProjetos[index]?.descProjeto}
                  onChange={(e) => {
                    const newProjet = [...getProjetos];
                    newProjet[index].descProjeto = e.target.value;
                    setProjetos([...newProjet]);
                  }}
                ></textarea>

                <button
                  type="button"
                  onClick={(e) => {
                    api
                      .put(
                        `/projeto/descricao/?id=${getProjetos[index]?.id}`,
                        { projeto: getProjetos[index].descProjeto },
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
            </form>
          </div>
          <br />
          <div className="container-links">
            <form action="" method="post" className="links">
              {' '}
              <button className="btn-git-net">
                <a href={getProjetos[index].linkGithub} target="_blank">
                  <i className="fab fa-github"></i>
                </a>{' '}
              </button>
              <input
                type="text"
                name=""
                value={getProjetos[index].linkGithub}
                id=""
                onChange={(e) => {
                  const newProjet = [...getProjetos];
                  newProjet[index].linkGithub = e.target.value;
                  setProjetos([...newProjet]);
                }}
              />
              <button
                type="button"
                onClick={(e) => {
                  api
                    .put(
                      `/projeto/link-github/?id=${getProjetos[index].id}`,
                      { linkGithub: getProjetos[index].linkGithub },
                      {
                        headers: {
                          Authorization: JSON.parse(localStorage.getItem('tokenPortfolio') || ''),
                        },
                      },
                    )
                    .then((res) => {
                      console.log(res);
                      alert('Link Salvo');
                      props.updateComponent();
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                <img src={btnRefresh} alt="" />
              </button>
            </form>

            <br />

            <form action="" method="post" className="links">
              <button className="btn-git-net">
                <a href={getProjetos[index].linkProjeto}>
                  <i className="fas fa-window-restore"></i>
                </a>{' '}
              </button>
              <input
                type="text"
                name=""
                id=""
                value={getProjetos[index].linkProjeto}
                onChange={(e) => {
                  const newProjet = [...getProjetos];
                  newProjet[index].linkProjeto = e.target.value;
                  setProjetos([...newProjet]);
                }}
              />
              <button
                type="button"
                onClick={(e) => {
                  api
                    .put(
                      `/projeto/link-projeto/?id=${getProjetos[index].id}`,
                      { linkProjeto: getProjetos[index].linkProjeto },
                      {
                        headers: {
                          Authorization: JSON.parse(localStorage.getItem('tokenPortfolio') || ''),
                        },
                      },
                    )
                    .then((res) => {
                      console.log(res);
                      alert('Link Salvo');
                      props.updateComponent();
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                <img src={btnRefresh} alt="" />
              </button>
            </form>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <AdminProjetoAdd updateComponent={props.updateComponent}></AdminProjetoAdd>
      <Container id="sec3">
        <section className="projetos">
          {React.Children.map(projetos, (element) => {
            return React.cloneElement(element as React.ReactElement);
          })}
        </section>
      </Container>
    </>
  );
}
