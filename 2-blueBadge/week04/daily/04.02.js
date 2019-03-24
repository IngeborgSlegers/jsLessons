/**************************
CODE CHALLENGE 2 - ARRAYS
**************************/
// * Give Students about 30/40 Minutes then go over solutions - Get students to Slack their own solutions after giving instructor solution
/*
Given 2 arrays:
[10,20,30,40,50,70]
[5,3,2,5]

Create a function that multiplies 'like' indexes (0 with 0, 1 with 1, etc.) together then place the value in a new array. 

The function you create should return [50, 60, 60, 200] based on the arrays above.

Make sure the values given to the function are an array type and they have data inside of them.

If the first array has more values than the second, return that same number
*/

const tensArray = [10,20,30,40,50,70];
const onesArray = 55;

const arrayMult = (arr1, arr2) => {
  let greaterLength = arr1.length >= arr2.length ? arr1.length : arr2.length;
  let newArr = [];

  for (let i = 0; i < greaterLength; i++){
    let newVal = arr1[i] * arr2[i] || arr1[i] || arr2[i]
    newArr.push(newVal);
  }

  return newArr;
}

console.log(arrayMult(onesArray, tensArray));

const multiplyValues = (arr1 = [], arr2 = []) => {
  // is an expression that checks the value and type of the arr1 given, then puts that value in that param
  arr1 = typeof arr1 == 'object' && arr1 instanceof Array && arr1.length > 0 ? arr1: false;
  arr2 = typeof arr2 == 'object' && arr2 instanceof Array && arr2.length > 0 ? arr2: false;
  
  let newArray = [];
  
  if (arr1 && arr1) {
    // loop over the first array
    for (let i = 0; i < arr1.length; i++) {
      if (arr2[i] == undefined) {
        newArray.push(arr1[i] * 1)
      } else {
        newArray.push(arr1[i] * arr2[i])
      }
    }
    return newArray
  } else {
    return 'Error: Please provide valid arrays'
  }
}

let funArr = multiplyValues(tensArray, onesArray);
console.log(funArr)

/*
Typeof vs Instanceof
What does typeof do again?  What do you think instanceof does?  Are both necessary?  No, but it is better safe than sorry to include them.  Typeof sets it to 'object'; why?  If arrays and objects both give the same typeof answer, including instanceof helps solidify that we are looking for an array.  

Instance of checks the prototype property of a constructor => here, it shows us that we are testing that we have an Array.  The capital 'A' Array is a constructor.  We can append classes to them (like we did with Object.assign() yesterday).  These constructors, at their root, simply give the type that they are working with--Array means that we can ONLY work with arrays.

So by including both typeof and instanceof, we are checking the type to make sure it is nothing other than an array in multiple ways.  Again, is this necessary?  No, but helpful.
*/

console.log([] instanceof Array); //true
console.log(typeof []); // object

console.log({} instanceof Object); //true
console.log(typeof {}); // object

/*
Ternary operators (recap) 
arr1 = typeof arr1 == 'object' && arr1 instanceof Array && arr1.length > 0 ? arr1: false;

same as

if (typeof arr1 == 'object && arr1 instanceof Array == true && arr1.length > 0) {
  ...
}
*/



// * React Concept Talk Two ( JSX & Create React App )

// * Pie Client Walkthrough Part Two