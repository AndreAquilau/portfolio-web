import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }
  .portfolio-photo_admin {
    display: flex;
    button {
      border: none;
      outline: none;
      cursor: pointer;
      position: relative;
      z-index: 0;
    }

    .photo_admin {
      img {
        border-radius: 150px;
        width: 130px;
        height: 130px;

        -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation-delay: 1s;
      }
    }
    .bts-container_admin {
      display: flex;

      -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation-delay: 1.2s;
    }
    .bts-admin {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
      img {
        margin-top: auto;
        width: 25px;
        height: 25px;

        -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation-delay: 1s;
      }
    }
  }

  .descricao-admin {
    width: 80%;
    font-size: 20px;
    margin-top: 2%;
    margin-bottom: 2%;
    -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 1.4s;
    img {
      width: 30px;
      height: 30px;
      transform: translateY(5px);
    }

    textarea {
      outline: none;
      border: 3px solid #626567;
      border-radius: 15px;
      padding: 8% 5%;
    }
  }

  .cartao-admin {
    margin-top: 5%;
    width: 80%;
    img {
      width: 25px;
      height: 25px;
      transform: translateY(5px);
    }
  }
  .cartao-admin a {
    color: black;
    text-decoration: none;
    font-size: 20px;
  }

  .cartao-admin a:hover {
    color: rgb(133, 133, 133);
  }

  .sobre-admin {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    button {
      display: flex;
    }
  }

  .btn-save {
    width: 40px;
    height: 40px;
    overflow: hidden;

    input {
      position: relative;
      z-index: 1;
      opacity: 0;
      cursor: pointer;
      width: 40px;
      height: 40px;
      transform: scale(1.5) translateY(10px);
    }

    .btn-save_image {
      position: absolute;
      z-index: 0;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }

  .link-icon_admin {
    img {
      width: 40px;
      height: 40px;
    }
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    img {
      width: 25px;
      height: 25px;
    }
  }

  .titulo {
    margin-top: 3%;
    width: 73%;
    background-color: #797d7f;
    border-radius: 15px;
    .form-titulo {
      display: flex;
      height: 50px;
      padding: 0 1%;
      flex-direction: row;
      justify-content: space-around;
      box-sizing: border-box;

      align-items: center;
      input {
        box-sizing: border-box;
        border: none;
        outline: none;
        padding: 1.5% 2%;
        border-radius: 15px;
      }
      button {
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;
        padding: 4% 5%;
        cursor: pointer;

        background: transparent;
        img {
          transform: scale(1.5) translateY(4px);
        }
      }
    }
  }

  .text-area_admin {
    display: flex;
    button {
      position: absolute;
      margin-left: 87%;
      margin-top: 2%;
      img {
        transform: scale(1.3);
      }
    }
  }

  .upload {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    .btn-upload {
      display: flex;

      width: 10vw;
      align-items: center;
      justify-content: space-between;
      .btn-upload_document {
        width: 30px;
        height: 60px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        height: 50px;
        padding: 0 1%;
        position: relative;

        input {
          box-sizing: border-box;
          border: none;
          outline: none;
          padding: 1.5% 2%;
          border-radius: 15px;
          position: relative;
          z-index: 1;
          opacity: 0;
          transform: scaleY(1.9) scaleX(1.5);
        }
        .btn-add {
          position: absolute;
          z-index: 0;
          transform: translateY(-5px) scale(1.5);
        }
      }
      button {
        cursor: pointer;
        img {
          transform: scale(1.5) translateY(4px);
        }
      }
    }
  }

  .btn-refresh {
    display: flex;
    align-items: flex-end;
    justify-content: center;

    button {
      cursor: pointer;
      img {
        transform: scale(1.5) translateX(-20px);
      }
    }
  }
`;
