const tarefa = document.getElementById("tarefa");

const diasDaSemana = document.querySelector("select");

const domingo = diasDaSemana.options[0];
const segunda = diasDaSemana.options[1];
const terca = diasDaSemana.options[2];
const quarta = diasDaSemana.options[3];
const quinta = diasDaSemana.options[4];
const sexta = diasDaSemana.options[5];
const sabado = diasDaSemana.options[6];

const blocoDomingo = document.getElementById("domingo");
const blocoSegunda = document.getElementById("segunda");
const blocoTerca = document.getElementById("terca");
const blocoQuarta = document.getElementById("quarta");
const blocoQuinta = document.getElementById("quinta");
const blocoSexta = document.getElementById("sexta");
const blocoSabado = document.getElementById("sabado");

const clockTask = document.getElementById("clockTask");


const add = () => {
  if (tarefa.value !== " ") {

    if (diasDaSemana.value == domingo.value) {
      blocoDomingo.innerHTML += `<p onclick="risk(this)">${tarefa.value}-${clockTask.value}</p>`;
    } else if (diasDaSemana.value == segunda.value) {
      blocoSegunda.innerHTML += `<p onclick="risk(this)">${tarefa.value}-${clockTask.value}</p>`;
    } else if (diasDaSemana.value == terca.value) {
      blocoTerca.innerHTML += `<p onclick="risk(this)">${tarefa.value}-${clockTask.value}</p>`;
    } else if (diasDaSemana.value == quarta.value) {
      blocoQuarta.innerHTML += `<p onclick="risk(this)">${tarefa.value}-${clockTask.value}</p>`;
    } else if (diasDaSemana.value == quinta.value) {
      blocoQuinta.innerHTML += `<p onclick="risk(this)">${tarefa.value}-${clockTask.value}</p>`;
    } else if (diasDaSemana.value == sexta.value) {
      blocoSexta.innerHTML += `<p onclick="risk(this)">${tarefa.value}-${clockTask.value}</p>`;
    } else if (diasDaSemana.value == sabado.value) {
      blocoSabado.innerHTML += `<p onclick="risk(this)">${tarefa.value}-${clockTask.value}</p>`;
    }
    
  } else {
    alert("Por favor, escreva algo 😀 ");
  }

  tarefa.value = " ";
};

const risk = (obj) => {
  obj.innerHTML = `<p class="riskText">${obj.innerHTML}</p>`;
};

const clearContainer = () => {
  blocoDomingo.innerHTML = " ";
  blocoSegunda.innerHTML = " ";
  blocoTerca.innerHTML = " ";
  blocoQuarta.innerHTML = " ";
  blocoQuinta.innerHTML = " ";
  blocoSexta.innerHTML = " ";
  blocoSabado.innerHTML = " ";
};
