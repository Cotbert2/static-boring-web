//call, set interval y set timeout, promesas en javascript, async await,


//@authors: Mateo García

//1) callbacks: es una función que se pasa como argumento a otra función y se invoca dentro de la función externa para completar alguna acción.

const messagePrinter = (callback) => {
    console.log('Hola');
    callback('mensaje terminado');
}



const printMessage = (message) => {
    console.log(message);
}

messagePrinter(printMessage);

//2) SetIterval: define una accion que se repite cada cierto tiempo, en este caso se repite cada 1 segundo.
//los argumentos son la funcion a ejecutar y el tiempo en milisegundos.


setInterval(() => {
    console.log('una impresion cada 1 segundo');
}, 1000);

//3) Set timeout: ejecuta una función  después de que haya transcurrido un tiempo determinado.


setTimeout(() => {
    console.log('una impresion despues de 3 segundos');
}, 3000);



//asincronismo

//4) Promesas: es un objeto que representa la terminación o el fracaso de una operación asíncrona.

const promesa = new Promise((resolve, reject) => {
    //se usa el resolve para indicar que la promesa se resolvió correctamente
    setTimeout(() => {
        resolve('promesa resuelta');
    }, 2000);
});


//ejemplo simpre de promesa, si se resuelve se imprime el mensaje, si falla se imprime el error

const isPairNumberPromiseFun = (number) => {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve('El número es par');
        } else {
            reject('El número no es par');
        }
    });
}

isPairNumberPromiseFun(3).then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.log(error);
});

//asyn await

//5) Async await: es una forma de trabajar con promesas de manera más sencilla, se usa para esperar a que una promesa se resuelva o se rechace.

const asyncFunction = async () => {
    try {
        const result = await isPairNumberPromiseFun(4);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}


// asyncFunction();


//ejemplo practico con fetch a la api de rick and morty

const getCharacter = async (id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const character = await response.json();
    return character;
}


getCharacter(1).then((character) => {
    console.log(character);
}).catch((error) => {
    console.log(error);
});

//ejemplo usnado then


const getAllCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo obtener los personajes');
            }
            return response.json()
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
}

console.log('obteneindo todos los personajes');
getAllCharacters();