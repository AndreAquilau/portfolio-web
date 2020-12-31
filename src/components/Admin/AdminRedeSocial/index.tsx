import React, { useEffect, useState } from 'react';
import { btnSave, btnAddImage, btnRefresh, btnDelete } from '../../../assets';
import RedeSocialAPI, { Redesocial } from '../../../interface/RedeSocial';
import api from '../../../services/api';
import { Container } from './styles';
import AdminRedeSocialAdd from '../AdminRedeSocialAdd';

export default function AdminRedeSocial(props: RedeSocialAPI): JSX.Element {
  const [getIcon, setIcon]: any = useState();
  const [getTypeIcon, setTypeIcon] = useState();
  const [getLinks, setLinks]: [Redesocial[] | undefined, (param: any) => any] = useState(props.redesociais);

  useEffect(() => {
    setLinks(props.redesociais);
  }, [props.redesociais, getIcon]);

  const elements = getLinks?.map((object, index, array) => {
    return (
      <>
        <div key={object.id} className="rede-item">
          <div className="rede-item_icon">
            <div className="link-icon_admin">
              <a href={object.link} target="_blank">
                <img className="fab" src={`${process.env.REACT_APP_API_STATICS}/${object.uploadIconLink}`} alt="" />
              </a>
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
                    const data = new FormData();

                    data.append('iconRedeSocial', files[0]);
                    setIcon(data);
                    console.log(files);
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
              value={getLinks[index].link}
              placeholder={object.link}
              onChange={(e) => {
                const newLinks = [...getLinks];
                newLinks[index].link = e.target.value;
                setLinks([...newLinks]);
              }}
            />
            <button
              type="button"
              onClick={(e) => {
                api
                  .put(`/redesocial/icon/?id=${object.id}`, getIcon, {
                    headers: {
                      Authorization: JSON.parse(
                        localStorage.getItem(String(process.env.REACT_APP_BASE_URL) || '') || 'false',
                      ),
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
                api
                  .put(
                    `/redesocial/link/?id=${getLinks[index].id}`,
                    { link: getLinks[index].link },
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
              <img src={btnRefresh} alt="" />
            </button>
            <button
              className="btn-delete"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                api
                  .delete(`/redesocial/?id=${object.id}`, {
                    headers: {
                      Authorization: JSON.parse(
                        localStorage.getItem(String(process.env.REACT_APP_BASE_URL) || '') || 'false',
                      ),
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
              <img src={btnDelete} alt="" />
            </button>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <AdminRedeSocialAdd updateComponents={props.updateComponent}></AdminRedeSocialAdd>
      <Container className="redesocial">
        <div className="redes-admin">
          {React.Children.map(elements, (element) => {
            return React.cloneElement(element as React.ReactElement);
          })}
        </div>
      </Container>
    </>
  );
}
