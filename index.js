function hasTargetSum(array, target) {
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
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

console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true (3 + 7)
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true (19 + 6)
console.log(hasTargetSum([1, 2, 5], 4)); // false
console.log(hasTargetSum([5, 1, 2, 4], 9)); // true (5 + 4)
console.log(hasTargetSum([], 5)); // false (empty array)
console.log(hasTargetSum([10], 10)); // false (one number can't form a pair)
console.log(hasTargetSum([-3, 4, 3, 90], 0)); // true (-3 + 3)
console.log(hasTargetSum([1, 2, 3, 4, 5, 6], 11)); // true (5 + 6)

function hasTargetSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] + arr[j] === target) {
              return true;
          }
      }
  }
  return false;
}
function hasTargetSum(arr, target) {
  let seenNumbers = new Set();

  for (let num of arr) {
      let complement = target - num;
      if (seenNumbers.has(complement)) {
          return true;
      }
      seenNumbers.add(num);
  }

  return false;
}

// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true
console.log(hasTargetSum([1, 2, 5], 4)); // false
console.log(hasTargetSum([5, 1, 2, 4], 9)); // true
console.log(hasTargetSum([], 5)); // false
console.log(hasTargetSum([10], 10)); // false
console.log(hasTargetSum([-3, 4, 3, 90], 0)); // true
console.log(hasTargetSum([1, 2, 3, 4, 5, 6], 11)); // true

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = hasTargetSum;
}
