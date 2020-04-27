// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(power(2, 10));

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5));

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
  if (arr.length === 1) return arr[0];
  return arr.pop() * productOfArray(arr);
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55

// Fibonacci

function fib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 1) + fib(num - 2);
}
console.log(fib(20));

// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
  if (str.length <= 1) return str;
  return str.slice(-1) + reverse(str.slice(0, -1));
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'

// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str) {
  if (str.length === 0) return true;
  return str[0] === str.slice(-1) ? isPalindrome(str.slice(1, -1)) : false;
}
console.log('isPalindrome');
console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false

// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback.
// Otherwise it returns false.

function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  return callback(arr[0]) ? true : someRecursive(arr.slice(1), callback);
}

const isOdd = val => val % 2 !== 0;

console.log('someRecursive');
console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], val => val > 10)); // false

// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr) {
  const flatArray = [];

  arr.forEach(item => {
    if (Array.isArray(item)) {
      // flatArray = flatArray.concat(flatten(item))
      flatArray.push(...flatten(item));
    } else {
      flatArray.push(item);
    }
  });

  return flatArray;
}

console.log('flatten');
console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
  const result = [];

  const capitalize = arr => {
    if (arr.length === 0) {
      return result;
    }

    const str = arr[0];
    result.push(str[0].toUpperCase() + str.slice(1));
    return capitalize(arr.slice(1));
  };

  return capitalize(arr);
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']

// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(obj) {
  let sum = 0;

  const isEvenNumber = value => typeof value === 'number' && value % 2 === 0;

  const getNestedEvenSum = obj => {
    Object.values(obj).forEach(value => {
      if (isEvenNumber(value)) {
        sum += value;
      } else if (typeof value === 'object' && value !== null) {
        getNestedEvenSum(value);
      }
    });
  };

  getNestedEvenSum(obj);

  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10

// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
  const result = [];

  const capitalize = array => {
    if (array.length === 0) return result;
    result.push(array.shift().toUpperCase());
    return capitalize(array);
  };

  return capitalize(arr);
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings.

function stringifyNumbers(obj) {
  return Object.entries(obj).reduce((newObj, [key, value]) => {
    if (typeof value === 'number') {
      newObj[key] = value.toString();
    } else if (typeof value === 'object' && !Array.isArray(value)) {
      newObj[key] = stringifyNumbers(value);
    } else {
      newObj[key] = value;
    }
    return newObj;
  }, {});
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

// function collectStrings(obj) {
//   const strings = [];

//   const collect = object => {
//     Object.values(object).forEach(value => {
//       if (typeof value === "string") {
//         strings.push(value);
//       } else if (typeof value === "object") {
//         collect(value);
//       }
//     });
//   };

//   collect(obj);

//   return strings;
// }

function collectStrings(obj) {
  return Object.values(obj).reduce((result, value) => {
    if (typeof value === 'string') {
      result.push(value);
    } else if (typeof value === 'object') {
      result.push(...collectStrings(value));
    }
    return result;
  }, []);
}

const object = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

console.log(collectStrings(object)); // ["foo", "bar", "baz"])
