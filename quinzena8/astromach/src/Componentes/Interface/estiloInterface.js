import styled from "styled-components";

export const Container = styled.body`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    hsla(197, 100%, 63%, 1) 0%,
    hsla(294, 100%, 55%, 1) 100%
  );
`;

export const Logo = styled.img`
  width: 60%;
`;

export const Card = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 42rem;
  width: 18rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 10px 10px 16px 0px rgba(0, 0, 0, 0.75);
`;

export const Menu = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 2px #762d93;
`;
export const BotaoLimpar = styled.button`
  background-color: white;
  border: none;
  outline: none;
  color: #48a498;
  font-weight: bolder;
`;

export const BotaoCurtidos = styled.button`
  border: none;
  outline: none;
  background-color: white;
  font-weight: bolder;
  color: #762d93;
`;
