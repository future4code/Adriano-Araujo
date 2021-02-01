import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url("https://images.vexels.com/media/users/3/205157/isolated/preview/3a1d0d70d14ba68cd27271c889618e51-ilustra-ccedil-atilde-o-do-espa-ccedil-o-astronauta-by-vexels.png"),
    linear-gradient(90deg, hsla(40, 63%, 85%, 1) 0%, hsla(22, 94%, 79%, 1) 100%);
  background-repeat: no-repeat;
  background-position: center;
`;
export const Cadastro = styled.section`
  width: 12rem;
  height: 14rem;
  border-radius: 2%;
  background: white;
  box-shadow: -4px 11px 5px -1px rgba(0, 0, 0, 0.54);
`;

export const UsuariosContainer = styled.div`
  overflow-y: auto;
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: hsla(28, 80%, 61%, 0.3);
`;

export const Lista = styled.p`
  width: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background: white;
  border-radius: 3%;
  padding: 0.1rem;
  margin-left: 1rem;
  box-shadow: 1px 2px 15px 0px black;
`;

export const BotaoDeletar = styled.button`
  background: white;
  border: none;
  margin-left: 1rem;

  &:hover {
    filter: invert(100%);
  }
`;

export const BotaoRetornar = styled.button`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode";
  margin-top: 2rem;
  box-shadow: -1px 6px 14px 0px rgba(0, 0, 0, 0.75);
`;
