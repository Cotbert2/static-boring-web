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

console.log('Students', students);

const addNewGrde = (student, newGrade) => {
    student.grades.push(newGrade);
}

//add new grades to all students

students.forEach((student) => {
    addNewGrde(student, 20);
});

console.log('Students with new grades', students);

//2.- student clasification

let excelentGradesStudents = [];
let goodGradesStudents = [];
let aprovedGradesStudents = [];
let failedGradesStudents = [];

students.forEach((student) => {
    let average = student.grades.reduce((acc, grade) => acc + grade) / student.grades.length;
    if (average >= 16) {
        excelentGradesStudents.push(student);
    } else if (average >= 12) {
        goodGradesStudents.push(student);
    } else if (average >= 8) {
        aprovedGradesStudents.push(student);
    } else {
        failedGradesStudents.push(student);
    }
});


console.log('Excelent grades students', excelentGradesStudents);
console.log('Good grades students', goodGradesStudents);
console.log('Aproved grades students', aprovedGradesStudents);
console.log('Failed grades students', failedGradesStudents);

//3.- statistics

//3.1.- average grade
const getAverageGrade = (student) => {
    return student.grades.reduce((acc, grade) => acc + grade) / student.grades.length;
}

students.map((student) => {
    student.average = getAverageGrade(student);
    console.log(`Student ${student.name} average grade is ${student.average}`);
});

//3.2.- highest grade per estudent

students.map((student) => {
    student.highestGrade = Math.max(...student.grades);
    console.log(`Student ${student.name} highest grade is ${student.highestGrade}`);
});

//3.2.- lowest grade per estudent

students.map((student) => {
    student.lowestGrade = Math.min(...student.grades);
    console.log(`Student ${student.name} lowest grade is ${student.lowestGrade}`);
});

//3.3 highes avage grade

let highestAverageGrade = Math.max(...students.map((student) => student.average));

console.log(`Highest average grade is ${highestAverageGrade}`);

//3.4.- lowest average grade

let lowestAverageGrade = Math.min(...students.map((student) => student.average));

console.log(`Lowest average grade is ${lowestAverageGrade}`);

