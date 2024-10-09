let etanol, gasolina;

function calcular(){
    etanol = parseFloat (formularioFlex.valoretanol.value.replace(",",","));
    gasolina = parseFloat(formularioFlex.valorgasolina.value.replace(",",","));

    if (etanol < (0.72*gasolina)){
        document.getElementById("status").src="alcool.png";
    } else {
        document.getElementById("status").src="gasolina.png";
    }
}

function limpar(){
    document.getElementById("status").src="neutro.png"
}