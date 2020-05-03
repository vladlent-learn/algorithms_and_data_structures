// Frequency Counter Pattern
function validAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }

  const frequency = {};

  str1.split('').forEach(char => {
    frequency[char] = (frequency[char] || 0) + 1;
  });

  return str2.split('').every(char => {
    if (frequency[char]) {
      frequency[char] -= 1;
      return true;
    }
    return false;
  });
}
// console.log(validAnagram("", "")); // true
// console.log(validAnagram("aaz", "zza")); // false
// console.log(validAnagram("anagram", "nagaram")); // true
// console.log(validAnagram("rat", "car")); // false
// console.log(validAnagram("awesome", "awesom")); // false
// console.log(validAnagram("qwerty", "qeywrt")); // true
// console.log(validAnagram("texttwisttime", "timetwisttext")); // true

// --------------------------------------------------------------------------

// Multiple Pointers Pattern (this solution doesn't use this pattern xD)
function countUniqueValues(arr: any[]): number {
  return arr.reduce((acc, value, index) => (value !== arr[index - 1] ? acc + 1 : acc), 0);
}

// console.log(countUniqueValues([1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([])); // 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

// input: two integers
function sameFrequency(x, y): boolean {
  const str1 = x.toString();
  const str2 = y.toString();

  if (str1.length !== str2.length) {
    return false;
  }

  const freq = {};

  [...str1].forEach(char => {
    freq[char] = (freq[char] || 0) + 1;
  });

  return [...str2].every(char => {
    if (freq[char]) {
      freq[char] -= 1;
      return true;
    }
    return false;
  });
}

// console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22, 222)); // false

// Using Frequency Counter Pattern
function areThereDuplicatesFreq(...args): boolean {
  const freq = {};

  return args.some(arg => {
    if (freq[arg]) {
      return true;
    } else {
      freq[arg] = 1;
      return false;
    }
  });
}

// console.log(areThereDuplicatesFreq(1, 2, 3)); // false
// console.log(areThereDuplicatesFreq(1, 2, 2)); // true
// console.log(areThereDuplicatesFreq("a", "b", "c", "a")); // true
// console.log(areThereDuplicatesFreq("a", "b", "c", "a", "d", "e")); // true

// Using Multiple Pointers Pattern (requires sorted array)
function areThereDuplicatesPointers(...args) {}

// Using Set
function areThereDuplicatesSet(...args) {
  return new Set(args).size !== args.length;
}

// console.log(areThereDuplicatesPointers(1, 2, 3)); // false
// console.log(areThereDuplicatesPointers(1, 2, 2)); // true
// console.log(areThereDuplicatesPointers("a", "b", "c", "a")); // true

// input: sorted array of integers
// output: find if there is a pair that equals to the target average
function averagePair(arr, target): boolean {
  if (arr.length < 2) {
    return false;
  }

  // Multiple Pointers Pattern
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const value = (arr[start] + arr[end]) / 2;

    if (value === target) {
      return true;
    } else if (value > target) {
      end -= 1;
    } else if (value < target) {
      start += 1;
    }
  }
  return false;
}

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

// input: two string
// output: check wether characters in the first string form subsequence in second stream
// without their order changing
function isSubsequence(substr: string, str: string): boolean {
  const testSubstr = substr.split('');

  for (let char of str) {
    if (testSubstr.length === 0) {
      return true;
    }

    if (testSubstr[0] === char) {
      testSubstr.shift();
    }
  }

  return testSubstr.length === 0;
}

// console.log(isSubsequence("hello", "hello world")); // true
// console.log(isSubsequence("sing", "sting")); // true
// console.log(isSubsequence("abc", "abracadabra")); // true
// console.log(isSubsequence("abc", "acb")); // false

// input: array of interger and number
// output: maximum sum of subarray with the length of passed number
function maxSubarraySum(arr: number[], n: number): number {
  if (n > arr.length) {
    return null;
  }

  if (n === arr.length) {
    return arr.reduce((acc, item) => (acc += item), 0);
  }

  let maxSum = arr.slice(0, n).reduce((acc, item) => (acc += item), 0);
  let prevSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    prevSum = prevSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, prevSum);
  }

  return maxSum;
}

// console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null

// input: array of positive integers and a positive integer
// output: minimal length of a contiguous subarray of which the sum is equal
// or greater than 2nd argument integer. if there isn't one, return 0;
function minSubarrayLen(nums: number[], sum: number): number {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
// console.log(minSubarrayLen([2, 1, 6, 5, 4], 9)); // 2
// console.log(minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
// console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
// console.log(minSubarrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
// console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

// input: string
// output: length of the longest substring with all distinct charecters
// function findLongestSubstring(str: string): number {
//   let length = 0;
//   let seen = {};
//   let start = 0;
//   let end = 0;
//   let i = 0;
//
//   while (end < str.length && i < 20) {
//     i++;
//   }
// }
//
// console.log(findLongestSubstring('')); // 0
// console.log(findLongestSubstring('rithmschool')); // 7
// console.log(findLongestSubstring('thisisawesome')); // 6
// console.log(findLongestSubstring('thecatinthehat')); // 7
// console.log(findLongestSubstring('bbbbb')); // 1
// console.log(findLongestSubstring('longestsubstring')); // 8
// console.log(findLongestSubstring('thisishowwedoit')); // 6
