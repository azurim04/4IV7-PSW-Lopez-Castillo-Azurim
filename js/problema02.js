function validar(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function calcular(){
    var valor = document.formulario.sueldo.value;
    var resultado = parseInt(valor);
    var comision = resultado*0.30;
    var total = resultado + comision;

    document.formulario.comisiontot.value = "$"+comision;
    document.formulario.totalti.value = "$"+total;
}

function borrar(){
    document.formulario.sueldo.value="";
    document.formulario.comisiontot.value="";
    document.formulario.tot.value="";
}