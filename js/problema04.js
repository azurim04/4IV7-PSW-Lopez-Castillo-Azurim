function validar(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function calcular(){
    var p1 = document.formulario.parcial1.value;
    var r1 = parseFloat(p1);
    var p2 = document.formulario.parcial2.value;
    var r2 = parseFloat(p2);
    var p3 = document.formulario.parcial1.value;
    var r3 = parseFloat(p3);
    var parciales = parseInt((((r1 + r2 + r3)/3)*55)/10);
    var exam = document.formulario.examen.value;
    var rexam = parseInt((exam * 30)/10);
    var trab = document.formulario.trabajo.value;
    var rtrab = parseInt((trab * 15)/10);
    var total = parseFloat(parciales + rexam + rtrab)/10;

    document.formulario.final.value = total;
}

function borrar(){
    document.formulario.parcial1.value="";
    document.formulario.parcial2.value="";
    document.formulario.parcial3.value="";
    document.formulario.examen.value="";
    document.formulario.trabajo.value="";
    document.formulario.final.value="";
}