import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  img {
    border-radius: 150px;
    width: 130px;
    height: 130px;

    -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 1s;
  }

  .apresentar {
    margin-top: 50px;
    h1 {
      font-size: 3em;
      margin: 0;
    }
    h2 {
      margin: 0;
      font-size: 3em;
    }
    -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 1.2s;
  }

  .descricao {
    width: 80%;
    font-size: 20px;
    margin-top: 8%;
    margin-bottom: 8%;
    -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 1.4s;
  }

  .cartao {
    -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 1.6s;
  }
  .cartao a {
    color: black;
    text-decoration: none;
    font-size: 20px;
  }

  .redes {
    margin-top: 5%;
    margin-bottom: 5%;
    font-size: 25px;
    a {
      text-decoration: none;
      color: black;
      margin-right: 3%;
    }
    i {
      margin: 2px;
    }

    -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 1.8s;
  }

  .redes i:hover {
    color: rgb(133, 133, 133);
  }

  .cartao a:hover {
    color: rgb(133, 133, 133);
  }

  /* ----------------------------------------------
 * Generated by Animista on 2020-12-7 23:6:1
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * animation slide-in-top
 * ----------------------------------------
 */
  @-webkit-keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
