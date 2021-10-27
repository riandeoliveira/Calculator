// A função calculo chamada pelo botão em HTML analisa se as caixas de pesquisa 1 ou 2 estão vazias e exibe uma mensagem. Senão, as listas de opções são acionadas de acordo com a opção escolhida pelo usuário. Cada uma das estruturas de decisão chama duas funções.
function calculo() {
    if (document.getElementById("valor1").value == "" || document.getElementById("valor2").value == "") {
        alert("Digite os valores primeiro!")
    } else {
        if (document.getElementById("opcoes").value == "") {
            alert("Selecione uma operação!")
        }
        if (document.getElementById("opcoes").value == "1") {
            verifica()
            adicao()
        }
        if (document.getElementById("opcoes").value == "2") {
            verifica()
            subtracao()
        }
        if (document.getElementById("opcoes").value == "3") {
            verifica()
            multiplicacao()
        }
        if (document.getElementById("opcoes").value == "4") {
            verifica()
            divisao()
        }
        if (document.getElementById("opcoes").value == "5") {
            verifica()
            potenciacao()
        }
        if (document.getElementById("opcoes").value == "6") {
            verifica()
            porcentagem()
        }
    }
}

// A função verifica, chamada pelos if's, é responsável por examinar se pelo menos um dos valores inseridos não é um número. Se for um número válido a operação continua, senão ela não prossegue.
function verifica() {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    if (isNaN(valor1)) {
        alert("Digite um número válido!")
        return false
    } else if (isNaN(valor2)) {
        alert("Digite um número válido!")
        return false
    } else return true
}

function resetar() {
    location.reload()
}

// Funções que também são chamadas pelas estruturas de decisão, logo após a função "verifica" confirmar que os valores são números. Cada uma dessas funções abaixo está realizando uma operação. Eu incluí duas operações extras após as quatro básicas, elas são potenciação e porcentagem.
function adicao() {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    var resultado = parseFloat(valor1) + parseFloat(valor2)
    document.getElementById("resultado").value = resultado
    if (isNaN(valor1)) { }
    else
        if (isNaN(valor2)) { }
        else
            var historico = document.getElementById("historico");
    var paragrafo = document.createElement("p");
    paragrafo.innerHTML = `${valor1} + ${valor2} = ${resultado}`
    historico.appendChild(paragrafo);
}

function subtracao() {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    var resultado = parseFloat(valor1) - parseFloat(valor2)
    document.getElementById("resultado").value = resultado
    if (isNaN(valor1)) { }
    else
        if (isNaN(valor2)) { }
        else
            var historico = document.getElementById("historico");
    var paragrafo = document.createElement("p");
    paragrafo.innerHTML = `${valor1} - ${valor2} = ${resultado}`
    historico.appendChild(paragrafo);
}

function multiplicacao() {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    var resultado = parseFloat(valor1) * parseFloat(valor2)
    document.getElementById("resultado").value = resultado
    if (isNaN(valor1)) { }
    else
        if (isNaN(valor2)) { }
        else
            var historico = document.getElementById("historico");
    var paragrafo = document.createElement("p");
    paragrafo.innerHTML = `${valor1} * ${valor2} = ${resultado}`
    historico.appendChild(paragrafo);
}

function divisao() {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    var resultado = parseFloat(valor1) / parseFloat(valor2)
    document.getElementById("resultado").value = resultado
    if (isNaN(valor1)) { }
    else
        if (isNaN(valor2)) { }
        else
            var historico = document.getElementById("historico");
    var paragrafo = document.createElement("p");
    paragrafo.innerHTML = `${valor1} / ${valor2} = ${resultado}`
    historico.appendChild(paragrafo);
}

function potenciacao() {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    var resultado = parseFloat(Math.pow(valor1, valor2))
    document.getElementById("resultado").value = resultado
    if (isNaN(valor1)) { }
    else
        if (isNaN(valor2)) { }
        else
            var historico = document.getElementById("historico");
    var paragrafo = document.createElement("p");
    paragrafo.innerHTML = `${valor1}^${valor2} = ${resultado}`
    historico.appendChild(paragrafo);
}

function porcentagem() {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    var resultado = parseFloat(valor1) * parseFloat(valor2) / 100
    document.getElementById("resultado").value = resultado
    if (isNaN(valor1)) { }
    else
        if (isNaN(valor2)) { }
        else
            var historico = document.getElementById("historico");
    var paragrafo = document.createElement("p");
    paragrafo.innerHTML = `${valor1}% de ${valor2} = ${resultado}`
    historico.appendChild(paragrafo);
}