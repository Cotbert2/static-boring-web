//@authors: Mateo Garcia (Cotbert)

let student1 = {
    name : 'Jefferson David',
    grades : [ 20, 20, 20]
}

let student2 = {
    name : 'Jorge Luis',
    grades : [ 10, 10, 10]
}

let student3 = {
    name : 'Juan Carlos',
    grades : [ 15, 15, 15]
}

let student4 = {
    name : 'Juan David',
    grades : [ 5, 5, 5]
}

let student5 = {
    name : 'Juan Pablo',
    grades : [ 1, 1, 1]
}

let student6 = {
    name : 'Juan Esteban',
    grades : [ 12, 12, 12]
}

let student7 = {
    name : 'Juan Sebastian',
    grades : [ 14, 14, 14]
}

let student8 = {
    name : 'Juan Felipe',
    grades : [ 18, 18, 18]
}

let student9 = {
    name : 'Juan David',
    grades : [ 20, 20, 20]
}

let student10 = {
    name : 'Juan Pablo',
    grades : [ 19, 19, 19]
}

let students = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10];


//without funcitons

//1.- add new grades to all students
students.map((student) => {
    student.grades[student.grades.length] = 20;
});




// console.log('Students with new grades', students);

//2.- student clasification



students.map((student) => {
    
    let average ;
    if (student.grades.length === 0) average = 0;
    else average= student.grades.reduce((acc, grade) => acc + grade) / student.grades.length;
    if (average >= 16) {
        student.classification = 'Excelent';
    } else if (average >= 12) {
        student.classification = 'Good';
    } else if (average >= 8) {
        student.classification = 'Aproved';
    } else {
        student.classification = 'Failed';
    }
});




//3.- statistics

//3.1.- average grade

students.map((student) => {

    if (student.grades.length === 0) {
        student.average = 0;
    }else {
        student.average =student.grades.reduce((acc, grade) => acc + grade) / student.grades.length;
    }
});




//3.2.- highest grade per estudent

students.map((student) => {
    student.highestGrade = student.grades.reduce((acc, grade) => acc > grade ? acc : grade);
});

//3.2.- lowest grade per estudent

students.map((student) => {
    student.lowestGrade = student.grades.reduce((acc, grade) => acc < grade ? acc : grade);
});


//3.3 highes avage grade

let highestAverageGrade = students.reduce((acc, student) => acc.average > student.average ? acc : student).average;


//3.4.- lowest average grade

let lowestAverageGrade = students.reduce((acc, student) => acc.average < student.average ? acc : student).average;


console.log('******Sistema de notas******');
students.map((student) => {
    console.log(`Nombre: ${student.name}`);
    console.log(`Clasificacion: ${student.classification}`);
    console.log(`Promedio: ${student.average}`);
    console.log(`Nota mas alta: ${student.highestGrade}`);
    console.log(`Nota mas baja: ${student.lowestGrade}`);
    console.log('------------------------------');
});

console.log('Estadisticas');
console.log(`Promedio mas alto: ${highestAverageGrade}`);
console.log(`Promedio mas bajo: ${lowestAverageGrade}`);
