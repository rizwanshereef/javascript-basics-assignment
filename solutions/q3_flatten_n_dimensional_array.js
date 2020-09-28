/* Write a Program to Flatten a given n-dimensional array */

const flatten = (input) => {
    // Write your code here
    if(Array.isArray(input)){
        return input.reduce(function(arr,current){
            let temp=Array.isArray(current)?flatten(current):[current];
            return arr.concat(temp);
        }, []);
    }
    else{
        return null;
    }
};
/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]
*/
module.exports = flatten;