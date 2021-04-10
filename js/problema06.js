function validar(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function caledad(){
    var vaño = document.formulario.año.value;
    var raño = parseInt(vaño);
    var vmes = document.formulario.mes.value;
    var rmes = parseInt(vmes);
    var vdia = document.formulario.dia.value;
    var rdia = parseInt(vdia);
    var vañoact = document.formulario.añoact.value;
    var rañoact = parseInt(vañoact);
    var vmesact = document.formulario.mesact.value;
    var rmesact = parseInt(vmesact);
    var vdiaact = document.formulario.diaact.value;
    var rdiaact = parseInt(vdiaact);

    if((rdia = rdiaact) && (rmes = rmesact || rmes < rmesact) && (raño < rañoact)){
        var allvalid = true;
        var totedad = rañoact - raño;
        return document.formulario.edad.value = totedad + " años";
    } else if (rdia > rdiaact || rmes > rmesact) {
        var allvalid = true;
        var totedad = (rañoact - raño) - 1;
        return document.formulario.edad.value = totedad + " años";
    }

    if(!allvalid){
        alert("El año actual debe ser mayor al año de nacimiento");
        document.formulario.añoact.value="";
        formulario.añoact.focus();
        return false;
    }
}

function borrar(){
    document.formulario.año.value="";
    document.formulario.añoact.value="";
    document.formulario.mes.value="";
    document.formulario.mesact.value="";
    document.formulario.dia.value="";
    document.formulario.diaact.value="";
    document.formulario.edad.value="";
}