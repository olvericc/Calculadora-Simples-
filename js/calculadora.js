document.getElementById("btnExecutar").addEventListener('click', function(event){
    event.preventDefault();

    //alert('Entrei');

    var valor1 = parseFloat ( document.querySelector("#txtValor1").value );
    var valor2 = parseFloat ( document.querySelector("#txtValor2").value );
    var op = parseInt ( document.querySelector("#txtOp").value );
    var calculo = 0;

    if (op == 1){
        calculo = valor1 + valor2;
        //somar
    }else if (op == 2){
        caculo = valor1 - valor2;
        //subtrair
    }else if (op == 3){
        calculo = valor1 * valor2;
        //subtrair
    }else{
        // operação 4
        calculo = valor1 / valor2;
        //dividir
    }

    document.querySelector("#display").textContent = calculo;
})