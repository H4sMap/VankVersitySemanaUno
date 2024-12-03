//Ejercicio Uno
let edadActual = parseInt(prompt("Que edad tienes actualmente?"));
let tiempo = parseInt(prompt("Coloca la cantidad de años que quieres agregar: "));

console.log("La edad que tendras en ", tiempo, " años sera ", edadActual+tiempo , " años");

console.log("-------------------");
//Ejercicio Dos
let numberOne = parseFloat(prompt("Número uno: "));
let numberTwo = parseFloat(prompt("Número dos: "));

console.log("El producto es: ", numberOne*numberTwo);
if(numberOne != 0 && numberTwo != 0) {
    console.log("El módulo es: ", numberOne%numberTwo);
    console.log("El cociente es: ", numberOne/numberTwo);
} else {
    console.log("El modulo no se puede realizar");
    console.log("La división es imposible");
}
console.log("La resta es: ", numberOne-numberTwo);
console.log("La suma es: ", numberOne+numberTwo);

console.log("-------------------");
//Ejercicio Tres
let precio = parseFloat(prompt("Precio: "));
let meses = parseInt(prompt("Meses: "));
const aumento = .05;
let valorCuota = (precio*aumento)+precio;
let valorTotal = valorCuota*meses;
console.log("El valor de una cuota al es: ", valorCuota, " y el valor a pagar en los ", meses, " meses es: ", valorTotal);

console.log("-------------------");
//Ejercicio Cuatro
let base = parseFloat(prompt("Base: "));
let altura = parseFloat(prompt("Altura: "));
console.log("El área del triángulo es: ", (base*altura)/2);

console.log("-------------------");
//Ejercicio Cinco
let radio = parseFloat(prompt("Área: "));
const pi = 3.1416;
console.log("El área es: ", pi*(radio)**2);
console.log("El perimetro es: ", 2*pi*radio);

console.log("-------------------");
//Ejercicio Seis
let lado = parseFloat(prompt("Lado: "));
console.log("El volumen del cubo es: ", lado*lado*lado);

console.log("-------------------");
//Ejercicio Siete
let precioProducto = parseFloat(prompt("Precio producto: "));
const iva = .19;
let precioFinal = (iva*precioProducto)+precioProducto;
console.log("El precio final del producto es: ", precioFinal, " pesos");

console.log("-------------------");
//Ejercicio Ocho
let valorProducto = parseFloat(prompt("Valor producto: "));
const descuento = .1;
let precioConDescuento = (valorProducto*descuento)-valorProducto;
console.log("El producto con descuento queda en: ", precioConDescuento, "pesos");

console.log("-------------------");
//Ejercicio Nueve
let valor = parseFloat(prompt("Valor sin porcentaje: "));
let porcentaje = parseFloat(prompt("Porcentaje: "));
let total = (valor*porcentaje)/100;
console.log("El valor total es: ", total);

console.log("-------------------");
//Ejercicio Díez
let numero = parseFloat(prompt("Numero: "));
if(numero >= 0) {
    console.log("El valor absoluto es: ", numero);
} else {
    console.log("El valor absoluto es: ", numero*-1); 
}

console.log("-------------------");
//Ejercicio Once
let dadoUno = Math.floor(Math.random()*6)+1;
let dadoDos = Math.floor(Math.random()*6)+1;
let resultado = dadoUno+dadoDos;
console.log("El resultado de la suma es: ", resultado);

console.log("-------------------");
//Ejercicio Doce
let celcius = parseFloat(prompt("Celcius: "));
console.log("El resultado en Fahrenheit es: ", (celcius*1.8)+32, " F");

console.log("-------------------");
//Ejercicio Trece
let factorial = 0;
for (let i = 0; i < 6; i++){
    factorial*=i; 
}
console.log(factorial);

console.log("-------------------");
//Ejercicio Catorce
let menor = parseInt(prompt("Rango uno: "));
let mayor = parseInt(prompt("Rango dos: "));
let aleatorio = Math.floor(Math.random()*(mayor-menor+1))+menor;
console.log("El número al azar es: ", aleatorio);

console.log("-------------------");
//Ejercicio Quince
let segundos = parseInt(prompt("Ingrese la cantidad de segundos: "));
let horas = Math.floor(segundos/3600);
segundos %= 3600;
let minutos = Math.floor(segundos/60);
segundos %= 60;
console.log("Cantidad de horas: ", horas, "Cantidad minutos: ", minutos, " y segundos: ", segundos);

console.log("-------------------");
//Ejercicio Dieciseis
let a = parseFloat(prompt("A: "));
let b = parseFloat(prompt("B: "));
let c = parseFloat(prompt("C: "));
let resultadoUno = -b+(Math.sqrt(b**2-4*a*c))/2*a;
let resultadoDos = -b-(Math.sqrt(b**2-4*a*c))/2*a;
console.log("Los resultado son: ", resultadoUno, " y ", resultadoDos);

console.log("-------------------");
