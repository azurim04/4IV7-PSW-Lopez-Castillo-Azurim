function validar(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function cal(){
    var valniñas = document.formulario.niñas.value;
    var rniñas = parseInt(valniñas);
    var valniños = document.formulario.niños.value;
    var rniños = parseInt(valniños);
    var valalu = document.formulario.alumnos.value;
    var totalumnos = parseInt(valalu);
    var pniñas = (rniñas * 100)/totalumnos;
    var pniños = (rniños * 100)/totalumnos;

    document.formulario.niñasti.value = "%"+parseFloat(pniñas);
    document.formulario.niñosti.value = "%"+parseFloat(pniños)
}

function borrar(){
    document.formulario.niñas.value="";
    document.formulario.niños.value="";
    document.formulario.niñasti.value="";
    document.formulario.niñosti.value="";
    document.formulario.alumnos.value="";
}