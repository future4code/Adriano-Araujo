import styled from "styled-components";


export const TamanhoImagem = styled.img`
width:600px;
height:400px;
`

export const TelaPrincipal = styled.main`
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`
export const PaginaEntrar = styled.section`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const TelaSatelites = styled.section`
width:60vw;
display:flex;
align-items:center;
flex-direction:column;

`
export const TamanhosSatelites = styled.img`
width:300px;
height:200px;
`

export const Sumario = styled.summary`
text-align:center;
&:focus{
    visibility: hidden;
}
`
export const BotoesContainer = styled.div`
display:flex;
justify-content:center;
flex-direction:row;
align-items:center;

`