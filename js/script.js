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
//16 
function classificarTriangulo() {
    let ladoA = parseFloat(document.getElementById("ladoA").value);
    let ladoB = parseFloat(document.getElementById("ladoB").value);
    let ladoC = parseFloat(document.getElementById("ladoC").value);

    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
        alert("Por favor, digite números válidos!");
        return;
    }   
    let resultado = "";

    if (ladoA === ladoB && ladoB === ladoC) {
        resultado = "O triângulo é Equilátero.";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        resultado = "O triângulo é Isósceles.";
    } else {
        resultado = "O triângulo é Escaleno.";
    }
    document.getElementById("res14").innerHTML = resultado;
}
//17
function selecionarBebida() {
    let bebida = document.getElementById("bebida").value;
    let resultado = "";
    switch (bebida) {
        case "agua":
            resultado = "Você escolheu Água.";
            break;
        case "refrigerante":
            resultado = "Você escolheu Refrigerante.";
            break;
        case "suco":
            resultado = "Você escolheu Suco.";
            break;
        default:
            resultado = "Opção inválida.";
    }
    document.getElementById("res15").innerHTML = resultado;
}
//18
function verificarVogalConsoante() {
    let letra = document.getElementById("letra").value.toLowerCase();
    let resultado = "";
    if (letra.length !== 1 || !/[a-z]/.test(letra)) {
        alert("Por favor, digite uma letra válida!");
        return;
    }
    if ("aeiou".includes(letra)) {
        resultado = "A letra '" + letra + "' é uma vogal.";
    } else {
        resultado = "A letra '" + letra + "' é uma consoante.";
    }
    document.getElementById("res16").innerHTML = resultado;
}
//19 
function calculadoraSimples() {
    let num1 = parseFloat(document.getElementById("calcNum1").value);
    let num2 = parseFloat(document.getElementById("calcNum2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado = 0;
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, digite números válidos!");
        return;

        resultado = " ";
    }
    switch (operacao) {
        case "somar":
            resultado = num1 + num2;
            break;
        case "subtrair":
            resultado = num1 - num2;
            break;
        case "multiplicar":
            resultado = num1 * num2;
            break;
        case "dividir":
            if (num2 === 0) {
                alert("Divisão por zero não é permitida!");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert("Operação inválida!");
            return;
    }
    document.getElementById("res17").innerHTML = resultado;
}
//20
function conversorMoedas() {
    let valor = parseFloat(document.getElementById("valorReal").value);
    let moeda = document.getElementById("moedaDestino").value;
    let resultado = 0;

    let dolar = 4.93;
    let euro = 5.77;
    let peso = 0.0035;

    if (isNaN(valor) || valor <= 0) {
        document.getElementById("res18").innerHTML = "Digite um valor válido!";
        return;
    }

    switch (moeda) {
        case "dolar":
            resultado = valor / dolar;
            document.getElementById("res18").innerHTML =
                "Valor em dólar: $" + resultado.toFixed(2);
            break;

        case "euro":
            resultado = valor / euro;
            document.getElementById("res18").innerHTML =
                "Valor em euro: €" + resultado.toFixed(2);
            break;

        case "peso":
            resultado = valor / peso;
            document.getElementById("res18").innerHTML =
                "Valor em peso argentino: $" + resultado.toFixed(2);
            break;

        default:
            document.getElementById("res18").innerHTML = "Moeda inválida!";
    }
}
//21 
function contagemProgressiva() {
    let inicio = parseInt(document.getElementById("contagemInicio").value);
    let fim = parseInt(document.getElementById("contagemFim").value);
    let resultado = "";

    if (isNaN(inicio) || isNaN(fim)) {
        document.getElementById("res19").innerHTML = "Digite valores válidos!";
        return;
    }

    if (inicio > fim) {
        document.getElementById("res19").innerHTML = "O início deve ser menor que o fim!";
        return;
    }

    for (let i = inicio; i <= fim; i++) {
        resultado += i + " ";
    }

    document.getElementById("res19").innerHTML = resultado;
}
//22
function gerarTabuada() {
    let numero = parseInt(document.getElementById("tabuadaNumero").value);
    let resultado = "";
    if (isNaN(numero)) {
        document.getElementById("res20").innerHTML = "Digite um número válido!";
        return;
    }
    for (let i = 1; i <= 10; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + "<br>";
    }
    document.getElementById("res20").innerHTML = resultado;
}
//23 
function somarCinco() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let n3 = parseFloat(document.getElementById("n3").value);
    let n4 = parseFloat(document.getElementById("n4").value);
    let n5 = parseFloat(document.getElementById("n5").value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) || isNaN(n5)) {
        document.getElementById("resultado").innerHTML = "Preencha todos os números!";
        return;
    }

    let soma = n1 + n2 + n3 + n4 + n5;

    document.getElementById("resultado").innerHTML = "Soma total: " + soma;
}
//24
function apenasPares() {
    let resultado = "";

    for (let i = 2; i <= 100; i += 2) {
        resultado += i + " ";
    }

    document.getElementById("res22").innerHTML = resultado;
}
//25
function calcularFatorial() {
    let num = parseInt(document.getElementById("numFatorial").value);
    let resultado = 1;
    let conta = "";

    if (isNaN(num) || num < 0) {
        document.getElementById("res23").innerHTML = "Digite um número válido!";
        return;
    }

    for (let i = num; i >= 1; i--) {
        resultado *= i;
        conta += i;

        if (i > 1) {
            conta += " × ";
        }
    }

    document.getElementById("res23").innerHTML =
        num + "! = " + conta + " = " + resultado;
}


