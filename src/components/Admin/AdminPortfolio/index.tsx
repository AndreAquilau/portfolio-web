import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { btnAdd, btnDelete, btnSave, btnEditor, btnAddImage, btnRefresh } from '../../../assets';
import PortfolioAPI from '../../../interface/Portifolio';
import api from '../../../services/api';

export default function AdminPortfolio(props: PortfolioAPI): JSX.Element {
  const [getPhoto, setPhoto]: any = useState();
  const [getDocument, setDocument]: any = useState();
  const [getTitulo, setTitulo] = useState('');
  const [getSobre, setSobre] = useState('');
  const [getSubtitulo, setSubtitulo] = useState('');
  const [getTypePhoto, setTypePhoto] = useState('.png, .jpg, .jpeg, .svg');
  const [getTypeDocument, setTypeDocument] = useState(
    '.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  );
  const token = process.env.TOKEN;

  return (
    <Container className="about-admin">
      <div className="portfolio-photo_admin">
        <div className="photo_admin">
          <img src={`${process.env.REACT_APP_API_STATICS}/${props.portfolio?.photo}`} alt={props.portfolio?.photo} />
        </div>
        <div className="bts-container_admin">
          <form action="" method="post" className="bts-admin btn-save">
            <div className="btn-save">
              <div className="btn-save_image">
                <img src={btnAddImage} alt="Foto Perfil" />
              </div>
              <input
                type="file"
                onChange={(e) => {
                  e.preventDefault();
                  const files: any = e.target.files;
                  const data = new FormData();
                  data.append('photo', files[0]);
                  setPhoto(data);
                }}
                name="photo"
                id="photo"
                accept={getTypePhoto}
              />
            </div>
          </form>
          <div className="btn-refresh">
            <button
              type="button"
              onClick={(e) => {
                api
                  .put(`/portfolio/photo/?id=${props.portfolio?.id}`, getPhoto, {
                    headers: {
                      Authorization: JSON.parse(localStorage.getItem('tokenPortfolio') || ''),
                      'Content-Type': 'multipart/form-data',
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
              <img src={btnRefresh} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="apresentar-admin">
        <div className="titulo">
          <form action="" method="post" className="form-titulo">
            <label htmlFor="">Título: {props.portfolio?.titulo}</label>
            <br />
            <input
              type="text"
              name=""
              id=""
              value={getTitulo}
              placeholder="Digite um título"
              onChange={(e) => {
                e.preventDefault();
                setTitulo(e.target.value);
              }}
            />
            <button
              type="button"
              onClick={(e) => {
                api
                  .put(
                    `/portfolio/titulo/?id=${props.portfolio?.id}`,
                    { titulo: getTitulo },
                    {
                      headers: {
                        Authorization: JSON.parse(localStorage.getItem('tokenPortfolio') || ''),
                      },
                    },
                  )
                  .then((res) => {
                    console.log(res);
                    setTitulo('');
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
      <div className="apresentar-admin">
        <div className="titulo">
          <form action="" method="post" className="form-titulo">
            <label htmlFor="">Subtitulo: {props.portfolio?.subtitulo}</label>
            <br />
            <input
              type="text"
              name=""
              id=""
              placeholder="Digite um subtitulo"
              value={getSubtitulo}
              onChange={(e) => {
                e.preventDefault();
                setSubtitulo(e.target.value);
              }}
            />
            <button
              type="button"
              onClick={(e) => {
                api
                  .put(
                    `/portfolio/subtitulo/?id=${props.portfolio?.id}`,
                    { subtitulo: getSubtitulo },
                    {
                      headers: {
                        Authorization: JSON.parse(localStorage.getItem('tokenPortfolio') || ''),
                      },
                    },
                  )
                  .then((res) => {
                    console.log(res);
                    setSubtitulo('');
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
      <div className="descricao-admin">
        <form action="" method="post" className="sobre">
          <div className="sobre-titulo">
            <label htmlFor="">Sobre</label>

            <div className="text-area_admin">
              <textarea
                name=""
                id=""
                cols={80}
                rows={10}
                value={getSobre}
                placeholder={props.portfolio?.sobre}
                onChange={(e) => {
                  setSobre(e.target.value);
                }}
              ></textarea>{' '}
              <button
                type="button"
                onClick={(e) => {
                  api
                    .put(
                      `/portfolio/sobre/?id=${props.portfolio?.id}`,
                      { sobre: getSobre },
                      {
                        headers: {
                          Authorization: JSON.parse(localStorage.getItem('tokenPortfolio') || ''),
                        },
                      },
                    )
                    .then((res) => {
                      console.log(res);
                      setSobre('');
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
          </div>
        </form>
      </div>
      <div className="cartao-admin">
        <form action="" method="post" className="upload">
          <label htmlFor="">Adicionar Arquivo Para Download: Atual({props.portfolio?.nameDocSobre})</label>
          <div className="bts-container_admin">
            <form action="" method="post" className="btn-upload">
              <div className="btn-upload_document">
                <input
                  type="file"
                  onChange={(e) => {
                    e.preventDefault();
                    const files: any = e.target.files;
                    const data = new FormData();
                    data.append('document', files[0]);
                    setDocument(data);
                  }}
                  name="document"
                  id="document"
                  accept={getTypeDocument}
                />
                <div className="btn-add">
                  <img src={btnAdd} alt="" />
                </div>
              </div>
              <div>
                <button
                  type="button"
                  onClick={(e) => {
                    api
                      .put(`/portfolio/document/?id=${props.portfolio?.id}`, getDocument, {
                        headers: {
                          Authorization: JSON.parse(localStorage.getItem('tokenPortfolio') || ''),
                          'Content-Type': 'multipart/form-data',
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
                  <img src={btnRefresh} alt="" />
                </button>
              </div>
            </form>
          </div>
        </form>
      </div>
    </Container>
  );
}
