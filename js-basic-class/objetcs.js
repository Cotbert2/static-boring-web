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


let personaGet = {
    nombre : '',
    apellido : '',

    edad : 50,
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    },
}

console.log(personaGet.nombreCompleto);

//set

let personaSet = {
    nombre : '',
    apellido : '',
    set nombreCompleto(value) {
        value = value.split(' ');
        this.nombre = value[0];
        this.apellido = value[1];
    }
}


personaSet.nombreCompleto = 'Juan Perez';


//construcotr fun

function PeronsaFC(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

const personaFC = new PeronsaFC('Juan', 'Perez', 'm@xd.com');


//add methods to constructor

function PeronsaFC2(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function() {
        return this.nombre + ' ' + this.apellido;
    }
}


const personaFC2 = new PeronsaFC2('Juan', 'Perez', 'xd@xd.com');

console.log(personaFC2.nombreCompleto());


PeronsaFC2.prototype.tel = '1234567890';

console.log(personaFC2.tel);


//call

let personaC1 = {
    nombre : 'Juan',
    apellido : 'Perez',
    nombreCompleto : function() {
        return this.nombre + ' ' + this.apellido;
    }
}


let personaC2 = {
    nombre : 'Carlos',
    apellido : 'Lara',
}


console.log(personaC1.nombreCompleto());
console.log(personaC1.nombreCompleto.call(personaC2));


//pass argumentos to call fucntion

let personaC3 = {
    nombre : 'Juan',
    apellido : 'Perez',
    nombreCompleto : function(titulo, tel) {
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let personaC4 = {
    nombre : 'Carlos',
    apellido : 'Lara',
}

console.log(personaC3.nombreCompleto('Lic', '1234567890'));
console.log(personaC3.nombreCompleto.call(personaC4, 'Ing', '0987654321'));