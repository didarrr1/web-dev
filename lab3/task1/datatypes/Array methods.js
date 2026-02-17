function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}
let aa = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); 
alert( arr ); 


//2
let ab = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );


//3
function copySorted(arr) {
  return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted );
alert( arr );