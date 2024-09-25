//exercio 1
document.getElementById("botao1").addEventListener("click", function mudarTexto(){
    document.getElementById("mudar-p").innerHTML = "Olá, mundo!";
});

//exercicio 2
let texto = document.getElementById("likes").textContent;
let numero = texto.split(":")[1];
function likes(){
    numero = parseInt(numero) + 1;
    document.getElementById("likes").textContent = "Likes: " + numero;
}
function deslikes(){
    if(numero == 0){
        return;
    }else{
    numero = parseInt(numero) - 1;
    document.getElementById("likes").textContent = "Likes: " + numero;
    }
}

//exercicio 3
document.getElementById("botao3").addEventListener("click", function alerta(){
    alert("boas-vindas!");
}); 

//exercicio 4
document.getElementById("botao4").addEventListener("click", function mudarTextoButao(){
    document.getElementById("botao4").textContent = "Obrigado por clicar!";
});
