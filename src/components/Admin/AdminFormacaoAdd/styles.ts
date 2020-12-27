import styled from 'styled-components';

export const Container = styled.section`
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 5%;

  -webkit-animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  button {
    border: none;
    outline: none;
    cursor: pointer;
    transform: translateY(5px);
    backface-visibility: hidden;
  }

  .documentos {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }

  .formacao {
    display: flex;
    margin-top: 2%;
    width: 100%;
    border-radius: 15px;
    padding: 2;
    justify-content: space-between;

    .form-formacao {
      width: 100%;
      display: flex;
      height: 50px;
      padding: 0 1%;
      flex-direction: row;
      justify-content: space-between;
      box-sizing: border-box;
      .form-formacao_container {
        display: flex;
        width: 85.5%;
        flex-direction: row;
        background-color: #797d7f;
        border-radius: 15px;
      }
      .form-formacao_item {
        width: 100%;
        margin-top: auto;
        padding: 1%;
      }

      align-items: center;
      input {
        border: none;
        outline: none;
        padding: 3% 5%;
        border-radius: 15px;
        margin-left: 2%;
      }
      button {
        border: none;
        margin: 0;
        padding: 1;
        width: auto;
        overflow: visible;
        cursor: pointer;
        margin-left: 2%;

        background: transparent;
        img {
          width: 35px;
          height: 35px;
          transform: translateY(10px);
        }
      }
    }
  }

  @-webkit-keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
`;
