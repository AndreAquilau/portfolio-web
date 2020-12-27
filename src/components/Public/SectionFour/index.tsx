import React, { useState } from 'react';
import { Container } from './styles';
import email from '../../../services/email';
import { useTheme } from 'styled-components';

export default function SectionFour(): JSX.Element {
  const [getNome, setNome] = useState('');
  const [getText, setText] = useState('');
  const [getToEmail, setToEmail] = useState('');


  return (
    <Container id="sec4">
      <section className="contato">
        <div className="forms">
          <h1>Tem alguma dúvida?</h1>
          <h3>Me mande uma mensagem!</h3>
          <form action="" method="post">
            <div>
              <input type="text" name="" id="" placeholder="Digite seu nome." value={getNome} onChange={(e) => {
                const el: string = e.target.value as string;
                setNome(el);
              }}/>
            </div>
            <div>
              <input type="email" name="" id="" placeholder="Digite o seu email." value={getToEmail} onChange={(e) => {
                const el: string = e.target.value as string;
                setToEmail(el);
              }} />
            </div>
            <div>
              <textarea name="" id="" cols={30} rows={10} placeholder="Digite a sua mensagem." value={getText} onChange={(e) => {
                const el: string = e.target.value as string;
                setText(el);
              }}></textarea>
            </div>
          </form>
          <button
            type="button"
            onClick={(e) => {
             e.preventDefault()
             email.post('/email', {
              to: process.env.REACT_APP_TO_EMAIL,
              from: getToEmail,
              subject: 'Envio de e-mail Portfólio - ' + getNome,
              text: getText,
              html: `<span>${getText}</span> <br> ${getToEmail} `
            }).then(() => {
              alert('Email enviado com sucesso!!!');
            }).catch((error) => {
              alert('Error ao enviar o Email' + error.message);
            })
            }}
          >
            Enviar
          </button>
        </div>
      </section>
    </Container>
  );
}
