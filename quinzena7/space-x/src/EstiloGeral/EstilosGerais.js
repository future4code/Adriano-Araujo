import styled from "styled-components";


export const TamanhoImagem = styled.img`
width:600px;
height:400px;
`
export const ImagemNave = styled.img`
width:80px;
height:80px;
border-radius:50%;
border:solid 1px white;
`
export const TelaPrincipal = styled.main`
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background:url('https://cdn.wallpapersafari.com/78/98/5R2EL3.jpg');


`
export const PaginaEntrar = styled.section`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const TelaSatelites = styled.section`
width:60vw;
margin-top:4rem;
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
color:white;
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
export const ContainerSatelites = styled.section`
display:flex;
flex-direction:row;
justify-content:center;
`

export const CorParagrafo = styled.p`
color:white;
text-align:center;
`

export const CardDescricao = styled.details`
width:200px;
`

