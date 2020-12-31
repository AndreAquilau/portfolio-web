import React, { Props, useEffect, useState } from 'react';
import { btnAdd, btnRefresh, btnSave } from '../../../assets';
import { Projeto } from '../../../interface/Projeto';
import api from '../../../services/api';
import { Container } from './styles';

interface AdminProjetoAddInterface extends Props<any> {
  updateComponent: any;
}

export default function AdminProjetoAdd(props: AdminProjetoAddInterface): JSX.Element {
  const [getProjetos, setProjetos]: [Projeto | undefined, (param: any) => any] = useState();

  return (
    <Container id="sec3">
      <h1>
        <i className="fas fa-folder"></i>Projetos
      </h1>
      <section className="projetos">
        <div className="pj">
          <form action="" method="post" className="titulo">
            <label htmlFor="">Título</label>
            <div className="titulo-btn">
              <input
                type="text"
                name=""
                id=""
                value={getProjetos?.titulo}
                onChange={(e) => {
                  const newProjet = { ...getProjetos };
                  newProjet.titulo = e.target.value;
                  setProjetos(newProjet);
                }}
                placeholder="Digite o título do projeto..."
              />
              <button
                className="btn-add"
                type="button"
                onClick={(e) => {
                  api
                    .post(
                      `/projeto`,
                      {
                        descProjeto: getProjetos?.descProjeto,
                        titulo: getProjetos?.titulo,
                        linkGithub: getProjetos?.linkGithub,
                        linkProjeto: getProjetos?.linkProjeto,
                      },
                      {
                        headers: {
                          Authorization: JSON.parse(
                            localStorage.getItem(String(process.env.REACT_APP_BASE_URL) || '') || 'false',
                          ),
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
                  value={getProjetos?.descProjeto}
                  placeholder="Fale sobre o projeto..."
                  onChange={(e) => {
                    const newProjet = { ...getProjetos };
                    newProjet.descProjeto = e.target.value;
                    setProjetos(newProjet);
                  }}
                ></textarea>
              </div>
            </form>
          </div>
          <br />
          <div className="container-links">
            <form action="" method="post" className="links">
              {' '}
              <button className="btn-git-net">
                <a href={getProjetos?.linkGithub} target="_blank">
                  <i className="fab fa-github"></i>
                </a>{' '}
              </button>
              <input
                type="text"
                name=""
                value={getProjetos?.linkGithub}
                placeholder="Digite o  link do projeto no github..."
                id=""
                onChange={(e) => {
                  const newProjet = { ...getProjetos };
                  newProjet.linkGithub = e.target.value;
                  setProjetos(newProjet);
                }}
              />
            </form>

            <br />

            <form action="" method="post" className="links">
              <button className="btn-git-net">
                <a href={getProjetos?.linkProjeto}>
                  <i className="fas fa-window-restore"></i>
                </a>{' '}
              </button>
              <input
                type="text"
                name=""
                id=""
                value={getProjetos?.linkProjeto}
                placeholder="Digite o link do projeto..."
                onChange={(e) => {
                  const newProjet = { ...getProjetos };
                  newProjet.linkProjeto = e.target.value;
                  setProjetos({ ...newProjet });
                }}
              />
            </form>
          </div>
        </div>
      </section>
    </Container>
  );
}
