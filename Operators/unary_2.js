let a = 1;
let b = 2;

// console.log(++a === b++);
// Esse código é considerado confuso

// Uma melhor forma seria

a++;
console.log(a === b);
b++;

console.log(a);
console.log(b);
