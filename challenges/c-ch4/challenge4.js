'use strict';

//matrix functions 
//matrix is an array of arrays 
//nested for loop 

let matrixChallenge = module.exports = {};

 matrixChallenge.matrix = function(arr){
    let sumArr = [];
    for(let i = 0; i < arr.length; i++ ) {
        let sum = 0;
        for(let j = 0; j < arr[i].length; j++){
        sum += arr[i][j];
        
    }
sumArr.push(sum);
}
console.log(`the array of summed elements is ${sumArr}`);
return sumArr;  
}
//matrixChallenge.matrix([[5,4,6,8],[9,3,3,4]]);



