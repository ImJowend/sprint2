var cantPersonas = parseInt(prompt( "Cuantas personas pagaran: "));
var sum = 0;
var cant = 0;
 for (let i = 0; i < cantPersonas; i++) {
    let num = parseInt(prompt("Ingrese un monto: ")); 
    var sum = sum + num;
    var cant = cant + 1;
 }
 let prom = sum / cant;
 console.log(prom)
document.getElementById("resultado").innerHTML = prom;
