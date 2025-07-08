let botao = document.querySelector("#botao");
botao.style.background = "blue";
botao.style.color = "white"; 
botao.style.padding = "10px 20px";
botao.style.border = "none"; 
botao.style.borderRadius = "5px"; 
botao.style.cursor = "pointer"; 

let estaNoEstadoBemVindo = false; 
let contaCliques = 0;


botao.addEventListener("mouseover", () => {
    if (!estaNoEstadoBemVindo) {
        botao.style.background = "green";
    }
});
botao.addEventListener("mouseout", () => {
    if (!estaNoEstadoBemVindo) {
        botao.style.background = "blue";
        botao.style.color = "white"; 
    }
});
botao.addEventListener("click", () => {
    contaCliques++;

    if (estaNoEstadoBemVindo) {
        return;
    }

    if (contaCliques >= 1) {
        botao.style.background = "red";      
        botao.innerHTML = "BEM VINDO!!";     
        botao.style.color = "white";         
        estaNoEstadoBemVindo = true;        
    }
});
