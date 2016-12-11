function multiplyBy10 (array) {
  return array.map(function(x) {
    return x * 10;
  })
};

function shiftRight (array) {
  let newArray = array.map(function(value, index) {
      return array[(index + array.length - 1) % array.length]
  })
  return newArray
}






function onlyVowels (array) {
 let newArray2 = array.map(function(value) {
   return value.match(/a|e|i|o|u/gi).join("");
   //return value.replace(/a|e|i|o|u/gi, "");

 })// your code here
 console.log(newArray2);
 return newArray2;
}


// function onlyVowels (array) {
//  array.map(function(value) {
//    return value.match(/a|e|i|o|u/gi).join("");
//    //return value.replace(/a|e|i|o|u/gi, "");
//
//  })// your code here
//
//  return array;
// }



// function onlyVowels (array) {
//  let newArray2 = array.map(function(value, index) {
//    value.match(/a|e|i|o|u/gi).join("");
//
//    console.log(newArray2);
//  })// your code here
//  return newArray2;
// }

// var matrix = [[1,2,3],
//               [4,5,6],
//               [7,8,9]];



function doubleMatrix (array) {
  return array.map(function(value, index) {
    return value.map(function(value, index){
    return value * 2
  })

  });
};


// (function doubleMatrix (array) {
//   let newArray3 = array.map(function(value, index) {
//     value.map(function(value, index){
//     return value * 2
//   })
//
//   });
//   console.log(newArray3);
//   return newArray3;
//  // your code here
// }(matrix));

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
