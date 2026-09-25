 // 1. Calculate Tax
function calculateTax(amount) {
  return amount * 0.16;
}

// 2. Convert String to Uppercase
function convertToUpperCase(str) {
  return str.toUpperCase();
}

// 3. Find Maximum
function findMaximum(num1, num2) {
  return Math.max(num1, num2);
}

// 4. Check for Palindrome
function isPalindrome(str) {
  const lowerCaseStr = str.toLowerCase();
  const reversedStr = lowerCaseStr.split('').reverse().join('');
  
  return lowerCaseStr === reversedStr;
}

// 5. Calculate Discounted Price
function calculateDiscountedPrice(price, discount) {
  return price - (price * discount / 100);
}





// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };