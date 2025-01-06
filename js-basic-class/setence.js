const heroes = ['Ironman', 'Thor', 'Captain America', 'Hulk', 'Black Widow', 'Hawkeye'];

console.log('For loop');
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.log('For of loop');

for (let hero of heroes) {
    console.log(hero);
}

console.log('For in loop');

for (let index in heroes) {
    console.log(heroes[index]);
}


console.log('For each loop');
heroes.forEach((hero) => {
    console.log(hero);
});

console.log('While loop');

let i = 0;
while (i < heroes.length) {
    console.log(heroes[i]);
    i++;
}

console.log('Do while loop');

let j = 0;
do {
    console.log(heroes[j]);
    j++;
}while (j < heroes.length);

console.log('Map loop');

heroes.map((hero) => {
    console.log(hero);
});

const calcularPromedio = (num1,num2,num3) => {

}

//determinar mayor con 2 numeros


//es par, recibe un numero uy retorna tru o false

//anonima autoejecutable

//llame ala s funciones anteriores
