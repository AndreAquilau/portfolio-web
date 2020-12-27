import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  padding: 0 5%;
`;
export const SectionHome = styled.section`
  display: grid;
  height: 100%;
  margin-top: 5%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  font-family: 'Gothic A1', sans-serif;
  justify-content: space-between;
  align-items: stretch;

  @media screen and (max-width: 400px) {
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media screen and (max-width: 960px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
