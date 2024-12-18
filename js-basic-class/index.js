let personName = "pepe";
let age = 18;
let heigh = 1.8;

console.log(`Name: ${personName}`);
//str
let nombre = "Juan";
console.log(`Name: ${nombre}`);

let edad = 19;
console.log(`Edad: ${edad}`);

//object
let myObj = {
    nombre, 
    edad,
    heigh : 1.8
}

console.log(myObj);

//typeof
let myVar = "juan";

console.log(typeof myVar);


const saludar = () => {
    console.log('hola');
}


class Persona {
    constructor(nombre, edad, heigh){
        this.nombre = nombre;
        this.edad = edad;
        this.heigh = heigh;
    }

    saludar(){
        console.log(`Hola soy ${this.nombre}`);
    }
}

let persona = new Persona("Juan", 19, 1.8);
persona.saludar();

saludar();


//arithmetics

let x = 10;
let y = 5;

let suma = x + y;
let resta = x - y;
let multiplicacion = x * y;
let division = x / y;
let modulo = x % y;
let potencia = x ** y;
let sumaAsignacion = x += y;
let restaAsignacion = x -= y;
let multiplicacionAsignacion = x *= y;
let divisionAsignacion = x /= y;
let moduloAsignacion = x %= y;
let potenciaAsignacion = x **= y;
let app = ++x;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(modulo);
console.log(potencia);
console.log(sumaAsignacion);
console.log(restaAsignacion);
console.log(multiplicacionAsignacion);
console.log(divisionAsignacion);
console.log(moduloAsignacion);
console.log(potenciaAsignacion);
console.log(app);



//operadores de precedencia

let m = 3, b = 2, c = 1;



isEvenNumber = (number) => {
    return number % 2 === 0;
}

console.log( '3 is even', isEvenNumber(3));

//is major

const isMajor = (age) => {
    return (age >= 18)?'Es mayor de edad':'Es menor de edad';
}

const agePerson = 18;

console.log(`Persona con edad ${agePerson} ${isMajor(agePerson)}`);


const min = 20;
const max = 30;

const valueToEvaluate = 25;

if(valueToEvaluate >= min && valueToEvaluate <= max)console.log('El valor esta dentro del rango');
else console.log('El valor esta fuera del rango');
