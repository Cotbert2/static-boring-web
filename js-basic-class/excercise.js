/*
@authors: Mateo García
*/

const isNumber = (num) => typeof num === 'number';

function calcularPromedio (num1,num2,num3) {
    if (!isNumber(num1) || !isNumber(num2) || !isNumber(num3)) {
        throw new Error('Error: one or more arguments are not numbers');
    }
    return (num1+num2+num3)/3;
}

const determinarMayor = function (num1,num2) {
    if (!isNumber(num1) || !isNumber(num2)) {
        throw new Error('Error: one or more arguments are not numbers');
    }
    return num1>num2 ? num1 : num2;
}

const esPar = (num) => {
    if (!isNumber(num)) {
        throw new Error('Error: one or more arguments are not numbers');
    }
    return num%2 === 0;
};

(function (num1, num2, num3) {
    console.log('Promedio:', calcularPromedio(num1,num2,num3));
    console.log('Mayor:', determinarMayor(num1,num2));
    console.log('Es par:', esPar(num1));
})(1,2,3);

