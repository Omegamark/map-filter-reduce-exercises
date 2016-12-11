function onlyEven (array) {
  return array.filter(function(value) {
    return value % 2 === 0;
  })
  }
  // your code here


function onlyOneWord (array) {
  return array.filter(function(value) {
    return !value.includes(' ');
  })
  // your code here
};

function positiveRowsOnly (array) {
 function greaterThanZero(element){
   return element >= 0;
 }
 array = array.filter((innerArray)=>{
   if (innerArray.every(greaterThanZero)) {
     return innerArray;
   }
   // for (var i = 0; i < innerArray.length; i++) {
   //   if (innerArray[i] <= -1) {
   //     return false;
   //   }
   // }
   // return innerArray;
 });
 return array;
};
// positiveRowsOnly(matrix);
//
//
//   })
// }

  // your code here


function allSameVowels (array) {
  
  // your code here
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
