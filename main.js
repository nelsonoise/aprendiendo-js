var nombre = "Nelson Camacho";
var altura = 179;
/*
var concatenacion = nombre + " " + altura;

document.write(nombre);
document.write(altura);
document.write(concatenacion);

var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>Soy la caja de Datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cms</h3>
`;
if (altura >= 180) {
    datos.innerHTML += `<h1>Eres alto</h1>`
} else {
    datos.innerHTML += `<h1>Eres una persona bajita</h1>`
}
for (var i = 2000; i <= 2020; i++) {
    datos.innerHTML += `<h2>Estamos en el año: </h2>` + i;
}
*/
function MuestraMiNombre(nombre, altura) {
    var misdatos = `
    <h1>Soy la caja de Datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cms</h3>
    `
    return misdatos;;
}
MuestraMiNombre("Mi numbre es Nelson Camacho", 180);

function imprimir(nombre, altura) {
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Mi numbre es Nelson Camacho", 180);
}
imprimir();

var nombres = [`Nelson`, `Ana`, `Saul`];
document.write(`<h1>Listado de Nombres</h1>`)
for (i = 0; i < nombres.length; i++) {
    document.write(nombres[i] + '<br>');
}