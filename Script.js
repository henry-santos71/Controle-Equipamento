var equipamentos = [];

function adicionarEquipamento() {
  var nome = document.getElementById("nomeEquipamento").value;

  if (nome == "") {
    document.getElementById("resultado").innerHTML = "Digite o nome do equipamento.";
  } else {
    equipamentos.push(nome);
    document.getElementById("resultado").innerHTML = nome + " foi adicionado.";
    document.getElementById("nomeEquipamento").value = "";
  }
}

function removerEquipamento() {
  if (equipamentos.length == 0) {
    document.getElementById("resultado").innerHTML = "Não existem equipamentos para remover.";
  } else {
    var removido = equipamentos.pop();
    document.getElementById("resultado").innerHTML = removido + " foi removido.";
  }
}

function exibirEquipamentos() {
  if (equipamentos.length == 0) {
    document.getElementById("resultado").innerHTML = "Nenhum equipamento cadastrado.";
  } else {
    var texto = "";
    for (var i = 0; i < equipamentos.length; i++) {
      texto = texto + (i + 1) + " - " + equipamentos[i] + "<br>";
    }
    document.getElementById("resultado").innerHTML = texto;
  }
}

function quantidadeEquipamentos() {
  document.getElementById("resultado").innerHTML =
    "Existem " + equipamentos.length + " equipamento(s) cadastrado(s).";
}
