import styled from "styled-components";

export const Card = styled.section`
  border: solid 1px black;
  width: 300px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  position: block;
`;
export const PaginaPlaylist = styled.main`
  height: 100vh;
`;
export const ContainerCardPlaylist = styled.div`
  display: flex;
  flex-direction: row;
  width: 98vw;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const CardPlaylist = styled.details`
  border: solid 1px black;
  height: 200px;
  width: 300px;
  margin-top: 16px;
`;

export const BotaoVoltar = styled.div`
  margin-top: 200px;
`;

export const BotaoVerPlaylist = styled.div`
  text-align: center;
`;
