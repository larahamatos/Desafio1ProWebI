//2
function minhaFuncao() {
    //nome de função é um verbo
    //metodo é uma ação
    document.write("Olá, São Lucas!");
    document.write("<br> <a href= 'index.html'> voltar</a>");
    alert("Fim!");
}
//3
function pergunta() {
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
