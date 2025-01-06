let add = [1,2,3];

add.push(4);
console.log(add);

add.unshift(0); // add to the first index
console.log(add);


add.splice(2, 0, 1.5); // add to the second index -> args 1: index, args 2: how many to delete, args 3: what to add
console.log(add);

//modify array

add[2] = 2.5;
console.log(add);



let toMap = [1,2,3];

let newArray = toMap.map(num => num === 2 ? 5 : num)
console.log('toMap', toMap);
console.log('newArray', newArray);


//delete

let toDelete = [1,2,3,4,5];
toDelete.pop(); // delete the last element
console.log(toDelete);

toDelete.shift(); // delete the first element
console.log(toDelete);


toDelete.splice(1, 1); // delete the second element -> args 1: index, args 2: how many to delete
console.log(toDelete);