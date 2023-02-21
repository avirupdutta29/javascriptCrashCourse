alert("Hello World");

const numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
const fruits = ['apples', 'orranges', 'pears', 20, true, 20.02, false, undefined, null];
const numbersR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; 
const s="Avirup Dutta, Rohit R, Mohammed Azharuddin, Bayya Vasu Devarao, Bakkesh Satvik";
console.log(s.substring(0,7).toUpperCase());
console.log(s.split(', '));
console.log(numbers);
console.log(fruits[2]);
fruits.push("Mausambi");
console.log(fruits);
fruits.push("Bananas","Grapes");
fruits.unshift("Strawberries");
fruits.pop();
fruits.pop();
console.log(fruits);
console.log(numbersR);