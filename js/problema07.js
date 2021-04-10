function validar(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function op(){
    var vn1 = document.formulario.n1.value;
    var rn1 = parseFloat(vn1);
    var vn2 = document.formulario.n2.value;
    var rn2 = parseFloat(vn2);
    var resul = 0;

    if(rn1 == rn2){
        resul = parseFloat(rn1 * rn2);
        document.formulario.operacion.value = "Multiplicacion";
        document.formulario.resultado.value = resul;
    } else if (rn1 > rn2) {
        resul = parseFloat(rn1 - rn2);
        document.formulario.operacion.value = "Resta";
        document.formulario.resultado.value = resul;
    } else{
        resul = parseFloat(rn1 + rn2);
        document.formulario.operacion.value = "Suma";
        document.formulario.resultado.value = resul;
    }
}

function borrar(){
    document.formulario.n1.value="";
    document.formulario.n2.value="";
    document.formulario.operacion.value="";
    document.formulario.resultado.value="";
}