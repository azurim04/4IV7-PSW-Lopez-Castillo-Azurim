function validar(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function calcular(){
    var vhn = document.formulario.hn.value;
    var rhn = parseFloat(vhn);
    var vht = document.formulario.ht.value;
    var rht = parseInt(vht);
    var p = parseFloat(40 * rhn);

    if (rht > 40) {
        extras = rht - 40;
        if (extras > 8) {
            bonus = extras - 8;
            pago = parseFloat(((3*rhn) * bonus) + ((2*rhn) * 8));
            document.formulario.hex.value = "$"+pago;
            document.formulario.ptot.value = "$"+(pago + p);
        } else if (extras <= 8) {
            pago = parseFloat((2*rhn) * extras);
            document.formulario.hex.value = "$"+pago;
            document.formulario.ptot.value = "$"+(pago + p);
        }
    } else {
        pago = 0;
        document.formulario.hex.value = "$"+pago;
        document.formulario.ptot.value = "$"+(pago + p);
    }
}

function borrar(){
    document.formulario.hn.value="";
    document.formulario.ht.value="";
    document.formulario.hex.value="";
    document.formulario.ptot.value="";
}