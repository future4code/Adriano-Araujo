export const voltar = (history) => {
  history.goBack();
};

//

export const Inicial = (history) => {
  history.push("/");
};

export const InicialPublica = (history) => {
  history.push("/inicio-publico");
};

export const listaViagens = (history) => {
  history.push("/lista-de-viagens");
};

export const formulario = (history) => {
  history.push("/formulario");
};

//

export const login = (history) => {
  history.push("/login");
};

export const inicialPrivada = (history) => {
  history.push("/inicio-privado");
};

export const administrar = (history) => {
  history.push("/administrar");
};

export const viagens = (history) => {
  history.push("/viagens-adm");
};
