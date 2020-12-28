import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  width: 100%;
  box-sizing: border-box;
  margin-top: 5%;

  .xp {
    img {
      width: 25px;
      height: 25px;
      transform: translateY(5px);
    }
  }

  form {
    display: flex;
  }
  .text-area_admin {
    width: 80%;
    font-size: 20px;
    margin-top: 2%;
    margin-bottom: 2%;
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

  .text-area_admin {
    display: flex;
    button {
      border: none;
      margin: 0;
      padding: 0;
      width: auto;
      overflow: visible;
      background: transparent;
      position: absolute;
      margin-left: 40%;
      margin-top: 2%;
      cursor: pointer;
      img {
        transform: scale(1.3);
      }
    }
  }
`;
