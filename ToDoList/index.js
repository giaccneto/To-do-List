// contador para adicionar um id na tarefa para poder deletar ou fazer com que esteja completada
let contador = 0; 
// proximas tres linhas pegam a informação do HTML
let input = document.getElementById("inputTarefa");
let btnADD = document.getElementById("btn-add");
let main = document.getElementById("areaLista");


//função para adicionar a tarefa com tratamento  IF
function addTarefa() {
  let valorInput = input.value;

  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    ++contador;//sempre que a tarefa for criada vai aumentar o contador +1

    //novoItem cria o html com as informações
    let novoItem = ` <div id="${contador}" class="item">

        <div onclick="marcarTarefa(${contador})" class="item-icone">

            <a id="icone_${contador}" class="no" href="#">#</a>
        </div>


        <div class="item-nome">
           ${valorInput}
        </div>

        <button onclick="deletar(${contador})" class="delete">Deletar</button>

        <div class="item-botao">
        </div>

    </div>`;

    // esta linha adiciona item no campo com a estrutura HTML acima
    main.innerHTML += novoItem;
    
    // esta linha zera o conteudo do input e foca nele novamente
    input.value = "";
    input.focus();
  }else{
    alert("Digite a tarefa!")
  }
}

function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
  input.value = "";
  input.focus();
}

function marcarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute("class");
  if (classe == "item") {
    item.classList.add("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("item-clicado");
    // icone.classList.add('item-clicado');

    item.parentNode.appendChild(item); //coloca o item no final da lista
  } else {
    item.classList.remove("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("item-clicado");
    //icone.classList.add('item-clicado');
  }
}

input.addEventListener("keyup", function (event) {
  //linha de codigo para adicionar item com a tecla enter
  if (event.keyCode === 13) {
    event.preventDefault();
    btnADD.click();
  }
});
