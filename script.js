// ==========================================================
// Calculadora Simples - JavaScript
// ==========================================================

let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")
let res = document.getElementById("res")
let historico = document.getElementById("historico")

let ultimaConta = ""

let SaiuDaRaiz = false

// =========================
// CONTROLE DE MODO (UI)
// =========================

function modoRaiz(){
    n2.disabled = true
    n2.value = ""
    n2.placeholder = "Não usado"
}

function modoNormal(){
    if(n2.disabled){
        SaiuDaRaiz = true
    }
    n2.disabled = false
    n2.placeholder = "Número 2"
}

// =========================
// CÁLCULO
// =========================

function calcular(op){

if(n1.value == ""){
alert("Preencha o Número 1!")
return
}

// se NÃO for raiz → volta ao normal
if(op !== "raiz"){
    modoNormal()
}

let a = Number(n1.value)
let b = Number(n2.value)

let resultado

switch(op){

case "+":
if(n2.value == ""){
    if(SaiuDaRaiz){
        SaiuDaRaiz = false
        return
    }
    alert("Preencha o Número 2!")
    return
}
resultado = a + b
ultimaConta = `${a} + ${b} = ${resultado}`
break

case "-":
if(n2.value == ""){
    if(SaiuDaRaiz){
        SaiuDaRaiz = false
        return
    }
    alert("Preencha o Número 2!")
    return
}
resultado = a - b
ultimaConta = `${a} - ${b} = ${resultado}`
break

case "*":
if(n2.value == ""){
    if(SaiuDaRaiz){
        SaiuDaRaiz = false
        return
    }
    alert("Preencha o Número 2!")
    return
}
resultado = a * b
ultimaConta = `${a} × ${b} = ${resultado}`
break

case "/":
if(n2.value == ""){
    if(SaiuDaRaiz){
        SaiuDaRaiz = false
        return
    }
    alert("Preencha o Número 2!")
    return
}
resultado = (a / b).toFixed(2)
ultimaConta = `${a} ÷ ${b} = ${resultado}`
break

case "pot":
if(n2.value == ""){
    if(SaiuDaRaiz){
        SaiuDaRaiz = false
        return
    }
    alert("Preencha o Número 2!")
    return
}
resultado = a ** b
ultimaConta = `${a} ^ ${b} = ${resultado}`
break

case "raiz":
modoRaiz()

if(a < 0){
alert("Não existe raiz real de número negativo!")
return
}
resultado = Math.sqrt(a).toFixed(2)
ultimaConta = `√${a} = ${resultado}`
break

}

res.value = resultado
SaiuDaRaiz = false
}

// =========================
// HISTÓRICO
// =========================

function fixar(){

if(ultimaConta == ""){
alert("Faça um cálculo primeiro!")
return
}

adicionarHistorico(ultimaConta)

}

function adicionarHistorico(texto){

let linha = document.createElement("div")
linha.textContent = texto

historico.append(linha)

let lista = JSON.parse(localStorage.getItem("historico")) || []
lista.push(texto)
localStorage.setItem("historico", JSON.stringify(lista))

}

function carregarHistorico(){

let lista = JSON.parse(localStorage.getItem("historico")) || []

lista.forEach(item => {
let linha = document.createElement("div")
linha.textContent = item
historico.append(linha)
})

}

function limparHistorico(){
historico.innerHTML = ""
localStorage.removeItem("historico")
}

// =========================
// INIT
// =========================

carregarHistorico()