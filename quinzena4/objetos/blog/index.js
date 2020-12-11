
function criarPost(){

alert("h")

  let arrayBlog = [];

  let publications = document.getElementById("container-de-posts");

  console.log(publications);

  let titulo = document.getElementById("titulo-post");
  let autor = document.getElementById("autor-post");
  let conteudo = document.getElementById("conteudo-post");
  let imagem = document.getElementById("imagem-post");

  const blog = {
    tituloPost: titulo.value,
    autorPost: autor.value,
    imagemPost: imagem.value,
    conteudoPost: conteudo.value,
  };

  arrayBlog.push(blog);

  let index;
// Criação das variáveis para acessar o arrayBlog
  let publicacaoTitulo;
  let publicacaoAutor;
  let publicacaoConteudo;
  let publicacaoImagem;

  for (index = 0; index < arrayBlog.length; index++) {
    publicacaoTitulo = arrayBlog[index].tituloPost;
    publicacaoAutor = arrayBlog[index].autorPost;
    publicacaoConteudo = arrayBlog[index].conteudoPost;
    publicacaoImagem = arrayBlog[index].imagemPost;
  }

  publications.innerHTML += `<b>${publicacaoTitulo}</b><br><i>${publicacaoAutor}</i><br><img src="${publicacaoImagem}"><br>${publicacaoConteudo}<br><hr> `;



  titulo.value = " ";
  autor.value = " ";
  conteudo.value = " ";
  imagem.value = " ";


}
