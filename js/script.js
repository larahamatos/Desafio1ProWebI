//2
function mostrar() {
    //nome de função é um verbo
    //metodo é uma ação
    document.write("Olá, São Lucas!");
    document.write("<br> <a href= 'index.html'> voltar</a>");
    alert("Fim!");
}
//3
function solicitarDados() {
    let nome = prompt("Qual é o seu nome?");
    document.getElementById("resp1").innerHTML = "Seu nome é: " + nome;
}
//4
function mostrarTexto() {
    let texto = document.getElementById("entrada").value;
    document.getElementById("res2").innerHTML = "Você digitou: " + texto;
}
//5
function somar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, digite números válidos!");
    } else {
        let resultado = num1 + num2;
        document.getElementById("res3").innerHTML = num1 + " + " + num2 + " = " + resultado;
    }
}
//6
function calcularMedia() {
    let nt1 = parseFloat(document.getElementById("nt1").value);
    let nt2 = parseFloat(document.getElementById("nt2").value);
    let nt3 = parseFloat(document.getElementById("nt3").value);
    if (isNaN(nt1) || isNaN(nt2) || isNaN(nt3)) {
        alert("Por favor, digite números válidos!");
    } else {
        let resultado = (nt1 + nt2 + nt3) / 3;
        if (resultado >= 7) {
            document.getElementById("res4").innerHTML = "A média é: " + resultado.toFixed(2) + " - Aprovado!";
        } else {
            document.getElementById("res4").innerHTML = "A média é: " + resultado.toFixed(2) + " - Reprovado!";
        }
    }
}
//7
function converterDolar() {
    let dolar = parseFloat(document.getElementById("dolar").value);
    const cotacao = 5.0;
    let real = dolar * cotacao;
    document.getElementById("res5").innerHTML = dolar + " dólares = " + real.toFixed(2) + " reais";
}
//8
function calcularArea() {
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);
    if (isNaN(base) || isNaN(altura)) {
        alert("Por favor, digite números válidos!");
    } else {
        let area = (base * altura) / 2;
        document.getElementById("res6").innerHTML = "A área do triângulo é: " + area.toFixed(2);
    }
}
//9
function calcularAntecessorSucessor() {
    let numero = parseInt(document.getElementById("numero").value);
    if (isNaN(numero)) {
        alert("Por favor, digite um número válido!");
    } else {
        let antecessor = numero - 1;
        let sucessor = numero + 1;
        document.getElementById("res7").innerHTML = "O antecessor de " + numero + " é " + antecessor + ", e o sucessor é " + sucessor;
    }
}
//10 
function verificarParImpar() {
    let numero = parseInt(document.getElementById("numParImpar").value);
    if (isNaN(numero)) {
        alert("Por favor, digite um número válido!");
    } else {
        if (numero % 2 === 0) {
            document.getElementById("res8").innerHTML = "O número " + numero + " é par.";
        } else {
            document.getElementById("res8").innerHTML = "O número " + numero + " é ímpar.";
        }
    }
}
//11
function verificarVelocidade() {
    let velocidade = parseFloat(document.getElementById("velocidade").value);
    const limite = 80;
    const gravissima = 120;
    if (isNaN(velocidade)) {
        alert("Por favor, digite um número válido!");
        return;
    }
    if (velocidade >= gravissima) {
        document.getElementById("res9").innerHTML = "Velocidade: " + velocidade + " km/h - INFRAÇÃO GRAVÍSSIMA!";
    } else  if (velocidade > limite) {
        document.getElementById("res9").innerHTML = "Velocidade: " + velocidade + " km/h - MULTADO!";
    } else {
        document.getElementById("res9").innerHTML = "Velocidade: " + velocidade + " km/h - Velocidade dentro do limite.";
    }
}

//12 
function verificarMaioridade() {
    let idade = parseInt(document.getElementById("idade").value);
    if (isNaN(idade)) {
        alert("Por favor, digite um número válido!");
    } else {
        if (idade >= 18) {
            document.getElementById("res10").innerHTML = "Você já pode dirigir!";
        } else {
            document.getElementById("res10").innerHTML = "Você ainda não tem idade para dirigir.";
        }
    }
}
//13
function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("alturaIMC").value);
  
    if (isNaN(peso) || isNaN(altura)) {
        alert("Por favor, digite números válidos!");
        return;
    } 

        let imc = peso / (altura * altura);
        let classificacao = "";

        if (imc < 25) {
            classificacao = "Você está no peso ideal. " ;
        } else if (imc >= 25) {
            classificacao = "Atenção: Você está acima do peso ideal.";
        }
        document.getElementById("res11").innerHTML = classificacao;
    }

//14
function calcularDesconto() {
    let valorProduto = parseFloat(document.getElementById("valorProduto").value);
    let desconto = 0;
    if (isNaN(valorProduto)) {
        alert("Por favor, digite um número válido!");
    } else {
        if (valorProduto >= 500) {
            desconto = valorProduto - (valorProduto * 0.15);
        } else {
            desconto = valorProduto - (valorProduto * 0.05);
        }
        document.getElementById("res12").innerHTML = "O valor final da sua compra é R$ " + desconto.toFixed(2);
    }
}
//15
function compararNumeros() {
    let num1 = parseFloat(document.getElementById("numA").value);
    let num2 = parseFloat(document.getElementById("numB").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, digite números válidos!");
        return
    } 
    let resultado = "";
 
    if (num1 > num2) {
      
           resultado= "O número " + num1 + " é maior que " + num2;
        } else if (num2 > num1) {
           
            resultado = "O número " + num2 + " é maior que " + num1;
        } else {
            resultado = "Os números são iguais.";
            
        }
        document.getElementById("res13").innerHTML = resultado;
    }
