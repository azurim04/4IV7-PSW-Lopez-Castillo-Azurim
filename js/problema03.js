function validar(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function descuento(){
    var valor = document.formulario.cantidad.value;
    var resultado = parseInt(valor);
    var desc = resultado*0.15;
    var total = resultado - desc;

    document.formulario.descuentoti.value = "$"+total;
}

function borrar(){
    document.formulario.cantidad.value="";
    document.formulario.descuentoti.value="";
}