import React, { useEffect, useState } from 'react';
import { btnRefresh, btnSave } from '../../../assets';
import ExperienciaAPI from '../../../interface/Experiencia';
import { Experiencia } from '../../../interface/Experiencia';
import api from '../../../services/api';
import { Container } from './styles';

export default function AdminExperiencia(props: ExperienciaAPI): JSX.Element {
  const [getExperiencia, setExperiencia]: [Experiencia | undefined, (param: any) => any] = useState();

  useEffect(() => {
    setExperiencia(props.experiencias);
  }, [props.experiencias]);

  return (
    <Container id="sec2">
      <h1>
        <i className="fas fa-address-book"></i>Experiencia
      </h1>
      <section className="xp">
        <div className="local">
          <form action="" method="post">
            <br />
            <div className="text-area_admin">
              <textarea
                name=""
                id=""
                cols={90}
                rows={10}
                value={getExperiencia?.descExperiencia}
                placeholder={getExperiencia?.descExperiencia}
                onChange={(e) => {
                  const newExperiencia = { ...getExperiencia };
                  newExperiencia.descExperiencia = e.target.value;
                  setExperiencia(newExperiencia);
                }}
              ></textarea>
              <button
                type="button"
                onClick={(e) => {
                  api
                    .put(
                      `/experiencia/?id=${getExperiencia?.id}`,
                      { descExperiencia: getExperiencia?.descExperiencia },
                      {
                        headers: {
                          Authorization: JSON.parse(localStorage.getItem('tokenPortfolio') || 'false'),
                        },
                      },
                    )
                    .then((res) => {
                      console.log(res);
                      alert('Experiencia Salva.');
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
      </section>
    </Container>
  );
}
