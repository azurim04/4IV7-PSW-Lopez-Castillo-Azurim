function validar(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function comparacion(){
    var vn1 = document.formulario.n1.value;
    var rn1 = parseFloat(vn1);
    var vn2 = document.formulario.n2.value;
    var rn2 = parseFloat(vn2);
    var vn3 = document.formulario.n3.value;
    var rn3 = parseFloat(vn3);

    if (rn1 > rn2 && rn1 > rn3) {
        document.formulario.mayor.value = rn1;
    } else if (rn2 > rn1 && rn2 > rn3) {
        document.formulario.mayor.value = rn2;
    } else {
        document.formulario.mayor.value = rn3;
    }
}

function borrar(){
    document.formulario.n1.value="";
    document.formulario.n2.value="";
    document.formulario.n3.value="";
    document.formulario.mayor.value="";
}