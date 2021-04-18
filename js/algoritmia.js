function validar(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8) return true;
    var patron = /[a-zA-Z\s]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function validar(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function validar3(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8) return true;
    var patron = /[a-zA-Z,]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

//problema 1 de tarea

function problema1(){

    var p1_input = document.querySelector('#p1-input').value;

    //tenemos que detectar el espacio, tendria que dividir la cadena y colocarla
    //dentro de un array
    var a =/^([a-zA-Z]+\s[a-zA-Z]+\s?[a-zA-Z]+)+$/;

    if(a.test(p1_input)){
        var p1_array = p1_input.split(' ').reverse();
        var p1_res = '';

        p1_array.forEach(function (palabra, i){
            if (i != 0 || i != p1_array.length) p1_res += ' ';
            p1_res += palabra;
        });
    }else{
        alert('Error: Por favor ingresa mas de una palabra, separadas por un espacio');
    }

    document.querySelector('#p1-output').textContent = p1_res;
}

//problema 2
function problema2(){
    // lo primero que necesito es obtener los valores por parte de los campos de html
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    /*
    para encontrar el minimo producto escalar entre 2 vectores,
    tenemos que realizar las operaciones correspondientes que son\
    con el maximo valor de un vector por el minimo valor del otrp
    vector
    */

    //construir vectores
    var p = /^(\d{1,4}).?(\d{1,2})?$/;
    if(p.test(p2_x1) && p.test(p2_x2) && p.test(p2_x3) && p.test(p2_x4) && p.test(p2_x5) && p.test(p2_y1)
        && p.test(p2_y2) && p.test(p2_y3) && p.test(p2_y4) && p.test(p2_y5)){

        var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
        var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

        //ordenar los vectores
        v1 = v1.sort(function(a, b){
            return b-a;
        });

        v2 = v2.sort(function(a, b){
            return b-a;
        });

        //invertir el vector 2
        v2 = v2.reverse();
        
        //producto
        var p2_producto = 0;

        for(var i = 0; i < v1.length; i++){
            p2_producto += v1[i]*v2[i];
        }
    }else{
        alert('Error: Por favor ingresa solamente numeros validos. No mas de 4 digitos seguidos de un punto y 2 decimales');
    }

    //imprimir resultado
    document.querySelector('#p2-output').textContent =
    'Producto escalar minimo: '+p2_producto;
}

//el 3 queda de tarea
function problema3(){

    var p3_input = document.querySelector('#p3-input').value;

    var p3_array = p3_input.split(',');

    var b =/^([A-Z]+,[A-Z]+,?[A-Z]+){1,10}$/;

    if(b.test(p3_input)){
        var cu=[];
        var abc="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

        p3_array.forEach(function (palabra, i){
            cu[i]=0;
            for(var j=0; j<abc.length; j++){
                var a = (palabra.match(new RegExp(abc.charAt(j),"g")) || []).length;
                if(a!=0) cu[i]++;
                r = Math.max(...cu);
            }
        });
        alert(cu)
    }else{
        alert('Error: Por favor ingresa mas de una palabra, en mayusculas y separadas por una coma. No uses espacios');
    }

    document.querySelector('#p3-output').textContent = r;
}