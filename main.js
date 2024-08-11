// Return Repeated Nums
/*
const returnRepeatedNums = (nums) => {
  let objectNums = {};
  let set = new Set();
  for (const num of nums) {
    if (objectNums[num]) {
      set.add(num);
    } else {
      objectNums[num] = 1;
    }
  }
  return Array.from(set).sort();
};

let array = [1, 1, 2, 3, 3, 2, 3, 4, 5, 5, 5, 6];
console.log(returnRepeatedNums(array));
 */

// Return Prime Numbers

/*
const returnPrimeNums = (nums) => {
  let [start, end] = nums;
  let result = [];
  for (let i = start; i < end; i++) {
    start++;
    if (start == 2) {
      result.push(start);
    }
    if (start % start == 0 && start % 1 == 0 && start % 2 != 0) {
      result.push(start);
    }
  }
  return result;
};

console.log(returnPrimeNums([1, 100]));
 */

// Return The Sentence Words in Ascending Order
/*
const orderSentence = (sentence) => {
  return sentence
    .split(" ")
    .sort((a, b) => a.length - b.length)
    .join(" ");
};

console.log(orderSentence("hello web masters academy and elzero web school"));
 */

// Filter The Array According To Special Function
/*
const filteringFunc = (arr, specialFunc) => {
  return arr.filter(specialFunc);
};

const myFunction = (num) => {
  return num % 2 == 0;
};

console.log(filteringFunc([1, 2, 3, 4, 5, 6, 7, 8, 9], myFunction));
*/
