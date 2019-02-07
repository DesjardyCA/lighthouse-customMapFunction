// Implement your own version of the built-in array map function.

// Yours will take in two arguments. The first will be an array to map and the second 
// will be a callback function. The function will return a new array based on the results 
// of the callback function.

var words = ["ground", "control", "to", "major", "tom"];

function map(list, callback) {
  var newList = [];
  list.forEach(set => {
    newList.push(callback(set));
  });

  return newList;
}

console.log(map(words, function (word) {
  return word.length;
}));

console.log(map(words, function (word) {
  return word.toUpperCase();
}));

console.log(map(words, function (word) {
  return word.split('').reverse().join('');
}));
console.log(words);

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]