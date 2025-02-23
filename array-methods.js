let colors = ['red', 'green', 'blue'];
// before
console.log("original array");
console.log(colors);

console.log("add new color orange");
// add new elemnt
colors.push("orange");
colors.push(20);


// after
console.log("after adding new element");
console.log(colors);

// remove last element
console.log(colors.pop())

console.log(colors);

console.log(colors.shift());

console.log("after unshift: ",colors.unshift("purple"));

console.log(colors);

// in place modification
colors.splice(1, 1, "yellow")
console.log(colors);
