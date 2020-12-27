import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  .rede-item {
    display: flex;
    width: 85%;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    margin-top: 2%;
    background-color: #797d7f;
    border-radius: 15px;
  }

  .rede-item_icon {
    display: flex;
    height: 50px;
    padding: 0 1%;
    flex-direction: row;

    box-sizing: border-box;
    border-radius: 15px;
    justify-content: center;
    align-items: center;

    .btn-save {
      width: 40px;
      height: 40px;
      overflow: hidden;
      transform: translateY(6px) translateX(5px) scale(0.8);

      &:hover {
        cursor: pointer;
      }

      input {
        position: relative;
        z-index: 1;
        opacity: 0;
        transform: scale(2) translateY(5px);
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
  }

  .link-conteudo_item {
    display: flex;
    height: 50px;
    padding: 5%;
    margin-left: 5%;
    justify-content: space-around;
    flex-direction: row;
    box-sizing: border-box;
    border-radius: 15px;
    align-items: center;
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
      img {
        width: 35px;
        height: 35px;
        transform: translateY(5px);
      }
    }
  }

  .btn-delete {
    transform: scale(0.7);
  }
`;
