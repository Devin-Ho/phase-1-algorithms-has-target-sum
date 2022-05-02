function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    //look through each item on the array
    for (let j = i + 1; j < array.length; j++) {
      //looks through rest of the array
      if (array[i] + array[j] === target) {
        //checks if the first num1 + num2 === target
        return true
      }
    }
  }
  return false 
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Compare (add) the first number of the array to the rest of the numbers
  and see if it equals to the target value 

  If(numbers in array === target) {
    return true 
  } else {
    return false 
  }
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
