let persona2 = {
    nombre: 'Juan',
    apellido: 'Perez',
    direccion: 'Calle falsa 123',
    email : 'example@mail.com',
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
}

const persona = {
    nombre : 'Maria',
    apellido : 'Jimenez',
    saludar: function() {
        console.log(`Hola ${this.nombre} ${this.apellido}`);
    }
}

persona.saludar();

//create construcotr object

const persona3 = new Object();
persona3.nombre = 'Carlos';
persona3.apellido = 'Lara';
persona3.saludar = function() {
    console.log(`Hola ${this.nombre} ${this.apellido}`);
}


//object.create

const prototipoPersona = {
    saludar : function() {
        console.log(`Hola desde ptotipo, soy ${this.nombre}`);

    }
};

const persona4 = Object.create(prototipoPersona);

persona4.nombre = 'Juan';
persona4.saludar();


//usando clases

class personaClass {
    constructor(nombre, apellido, edad, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
    }

    saludo() {
        console.log(`Hola soy ${this.nombre} ${this.apellido}`);
    }
}

const persona5 = new personaClass('Pedro', 'Lopez', 30, 1234567890);
persona5.saludo();

//interfaces


function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.saludar = function() {
        console.log(`Hola soy ${this.nombre} ${this.apellido}`);
    }
}

const persona6 = new Persona('Luis', 'Perez');
persona6.saludar();

const add = {nombre : 'xd'}

add.edad = 30;


for (const key in add) {
    console.log(key);
    console.log(add[key]);
}


console.log('nombre' in add);
console.log(add.hasOwnProperty('nombre'));


console.log(Object.keys(add));
console.log(Object.values(add));

console.log(Object.entries(add));

const copiaObjeto = Object.assign({}, add);
console.log(copiaObjeto);



Object.freeze(add);

Object.seal(add);




let personaArray = Object.values(add);