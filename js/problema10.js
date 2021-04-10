
function cal(){
    var vtiempo = document.formulario.tiempo.value;
    var vsalario = document.formulario.salario.value;
    var rsalario = parseFloat(vsalario);

    var b = /^[1|2|3|4|5|6|7|8|9|10|11]+\s[mes|meses]+$/;
    var a = /^[1\saño]+[\sy?\s?]+[1|2|3|4|5|6|7|8|9]+\s[mes|meses]+$|^1\saño+$/;
    var c = /^[234\saños]+[\sy?\s?]+[1|2|3|4|5|6|7|8|9]+\s[mes|meses]+$|^[2|3|4]\saños+$/;
    var d = /^[56789\saños]+[\sy?\s?]+[1|2|3|4|5|6|7|8|9]+\s[mes|meses]+$|^[56789]\saños+$/;
    var e = /^\d{2}[\saños]+[\sy?\s?]+[1|2|3|4|5|6|7|8|9]+\s[mes|meses]+$|^\d{2}\saños+$/;

    if (b.test(vtiempo) == true) {
        var u = rsalario * 0.05;
        return document.formulario.utilidad.value = u;
    } else if (a.test(vtiempo) == true) {
        var u = rsalario * 0.07;
        return document.formulario.utilidad.value = u;
    } else if (c.test(vtiempo) == true) {
        var u = rsalario * 0.10;
        return document.formulario.utilidad.value = u;
    } else if (d.test(vtiempo) == true) {
        var u = rsalario * 0.15;
        return document.formulario.utilidad.value = u;
    } else if (e.test(vtiempo) == true) {
        var u = rsalario * 0.20;
        return document.formulario.utilidad.value = u;
    } else {
        alert("Error");
        document.formulario.tiempo.value="";
        document.formulario.salario.value="";
        document.formulario.tiempo.focus();
        return false;
    }
}

function borrar(){
    document.formulario.tiempo.value="";
    document.formulario.salario.value="";
    document.formulario.utilidad.value="";
}
