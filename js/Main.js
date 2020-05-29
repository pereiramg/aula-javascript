
function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
};

function Redirecionar() {
    window.open("https://digitalinnovation.one/sign-in/");
    //window.location.href = "https://globallabs.academy/";
};

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse"
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("Trocar o texto");
};

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
};

function load() {
    alert("Pagina carregada");
};

function funcaoChange(elemento) {
    console.log(elemento.value);
};

//Funções
function soma(n1, n2) {
    return n1 + n2;
};
alert(soma(5, 10));

function setReplace(frase, nome, nome_novo) {
    return frase.replace(nome, nome_novo);
};
alert(setReplace("Vai Japão", "Japão", "Brasil"));

var validar = 0;
function validaIdade(idade) {
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
};
var idade = prompt("Qual a sua idade");
validaIdade(idade);
console.log(validar);

//datas
var d = new Date();
alert(d.getMonth());
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());

//laçõs
var suaidade = prompt("Qual a sua idade");
//var suaidade = 18;
if (suaidade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};

//repetição while
var count = 5;
while (count < 5) {
    console.log(count);
    count++
};

//repetição for
var count;
for (count = 0; count <= 5; count++) {
    console.log(count);
};


var lista = ["maça", "pera", "laranja"]; //Cria a minha lista de frutas
lista.push("Uva"); //Adiciona um elemento na lista
lista.pop(); //Remove o ultimo elemento da lista
console.log(lista); //exibe a minha lista
console.log(lista.length); //Tamnho da lista
console.log(lista.reverse()); //Trás a lista de trás para frente
console.log(lista.toString()); //transforma o meu array em string
console.log(lista[0]);
console.log(lista.toString[0]);
console.log(lista.join(" - "));

//dicionario de dados
var fruta = { nome: "maça", cor: "vermelha" }
console.log(fruta.nome);
alert(fruta.cor);
//Lista
var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];
console.log(frutas[1].nome);
alert(frutas[1].cor);


var nome = "Marcelo Galdino Pereira";
var idade = 37;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
alert("Bem vindo" + nome + "Sua idade é " + idade);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
alert(frase.replace("Japão", "Brasil"));
