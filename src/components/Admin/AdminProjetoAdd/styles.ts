import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;

  .titulo {
    display: flex;
    width: 70%;
    padding: 1% 3%;
    align-items: center;
    justify-content: space-between;
    background-color: #f5f5f5;
    border-radius: 15px;
    &-btn {
      display: flex;
      align-items: center;
      justify-content: center;

      input {
        border: solid 1px #000;
        outline: none;
        padding: 4% 5%;
        border-radius: 15px;
      }

      button {
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;
        background: transparent;

        cursor: pointer;
        img {
          width: 30px;
          height: 30px;
          transform: translateY(5px) translateX(5px);
        }
      }
    }
  }
  .bts {
    display: flex;
  }

  h1 {
    font-size: 20px;
  }

  .pj {
    background-color: #797d7f;
    padding: 15px;
    margin: 15px;
    border-radius: 5px;
    h1 {
      color: black;
      font-size: 20px;
    }
    p {
      color: #777777;
      font-size: 15px;
    }
    .btn-git-net {
      outline: none;
      border: none;
      background-color: transparent;
      font-size: 25px;
      margin: 2px;
    }

    .btn-git-net:hover {
      outline: none;
      border: none;
      color: #f5f5f5;
      font-size: 25px;
      margin: 2px;
    }

    a {
      color: inherit; /* blue colors for links too */
      text-decoration: inherit; /* no underline */
    }
  }
  .links {
    display: flex;
    background-color: #f5f5f5;
    border-radius: 15px;
    align-items: center;
    width: 45%;
    input {
      border: none;
      outline: none;
      padding: 4% 5%;
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
    }
    img {
      margin-top: auto;
      width: 30px;
      height: 30px;
      transform: translateY(5px);
    }
  }

  .projeto_admin {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    margin-top: 2%;
    margin-bottom: 2%;

    img {
      width: 30px;
      height: 30px;
      transform: translateY(5px);
    }

    textarea {
      margin-top: 2%;
      outline: none;
      border: 3px solid #f5f5f5;
      border-radius: 15px;
      padding: 8% 5%;
    }
    button {
      border: none;
      margin: 0;
      padding: 0;
      width: auto;
      overflow: visible;
      background: transparent;
      position: absolute;
      margin-left: 90%;
      margin-top: 4%;
      cursor: pointer;
      img {
        transform: scale(1.3);
      }
    }
  }
  .container-links {
    display: flex;
    justify-content: space-around;
  }
  .btn-add {
    position: relative;
    left: 80%;
  }
`;
