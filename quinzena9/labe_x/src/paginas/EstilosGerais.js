import styled from "styled-components";

export const Titulo = styled.h1`
  font-size: 4rem;
`;

export const Container = styled.main`
  text-align: center;
  margin: 2px;
`;
export const Botoes = styled.section`
  display: flex;
  justify-content: center;
  > button {
    margin: 2px;
  }
`;
export const ContainerFormulario = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const ContainerViagens = styled.section`
    display: flex;
  justify-content: space-around;
`;
export const ViagemCard = styled.section`
  border: 1px solid #a9a9a9;
  width: 20rem;
  margin: 0.5rem;
  border-radius: 10%;
  text-align: center;
  box-shadow: 3px 20px 26px -12px rgba(117, 130, 150, 1);
`;
