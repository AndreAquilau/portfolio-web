import React, { Props, useEffect, useState } from 'react';
import { btnSave, btnAddImage, btnRefresh, btnAdd } from '../../../assets';
import RedeSocialAPI, { Redesocial } from '../../../interface/RedeSocial';
import api from '../../../services/api';
import { Container } from './styles';

interface RedesocialAdd extends Props<any> {
  updateComponents: any;
}

export default function AdminRedeSocialAdd(props: RedesocialAdd): JSX.Element {
  const [getIcon, setIcon]: any = useState(new FormData());
  const [getTypeIcon, setTypeIcon] = useState();
  const [getFileName, setFileName]: any = useState();
  const [getLink, setLink]: [Redesocial | undefined, (param: any) => any] = useState();
  const token = process.env.TOKEN;

  return (
    <Container className="redesocial">
      <div className="redes-admin">
        <div className="rede-item">
          <div className="rede-item_icon">
            <div className="link-icon_admin">
              <h1>{getFileName?.name}</h1>
            </div>
            <form action="" method="post">
              <div className="btn-save">
                <div className="btn-save_image">
                  <img src={btnAddImage} alt="" />
                </div>
                <input
                  type="file"
                  onChange={(e) => {
                    e.preventDefault();
                    const files: any = e.target.files;
                    getIcon.append('iconRedeSocial', files[0]);
                    setFileName(files[0]);
                  }}
                  name="iconRedeSocial"
                  id="iconRedeSocial"
                  accept={getTypeIcon}
                />
              </div>
            </form>
          </div>

          <div className="link-conteudo_item">
            <input
              type="text"
              value={getLink?.link}
              placeholder="Digite o link"
              onChange={(e) => {
                const newLink = { ...getLink };
                newLink.link = e.target.value;
                setLink(newLink);
              }}
            />
            <button
              type="button"
              onClick={(e) => {
                getIcon.append('link', getLink?.link);

                api
                  .post(`/redesocial`, getIcon, {
                    headers: {
                      Authorization: JSON.parse(localStorage.getItem('tokenPortfolio') || 'false'),
                      'Content-Type': 'multipart/form-data',
                    },
                  })
                  .then((res) => {
                    console.log(res);
                    setIcon(new FormData());
                    const newLink = { ...getLink };
                    newLink.link = '';
                    setLink(newLink);
                    setFileName();
                    props.updateComponents();
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
      </div>
    </Container>
  );
}
