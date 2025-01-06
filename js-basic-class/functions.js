let add = function(a,b) {return a + b};

console.log(add(1,2));

function total (x,y){
    console.log('arguments length', arguments.length);
    return x + y;
}


console.log(total(1,2));

const arrowFunctions = (a,b) => a + b;

console.log(arrowFunctions(1,2));