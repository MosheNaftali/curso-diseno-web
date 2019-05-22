//var numero1 = document.getElementById('numero1').value; //En este caso, como al momento de cargar la página el valor de numero1 era 0, entonces se sigue almacenando 0
//var numero2 = document.getElementById('numero2').value;
//var resultado = numero1 + numero2;

function suma(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = numero1 + numero2;
    
    document.getElementById('resultado').value = resultado;
}