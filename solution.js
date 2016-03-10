// Write a function that takes a single integer as it's input
// and returns a string which contains the value expressed in words.
//
// e.g.
//      input: 1 -> output: one
//      input: 20 -> output: twenty
//      input: 300 -> output: three hundred
//      input: 4000 -> output: four thousand
//      input: 4321 -> output: four thousand three hundred twenty one
//      input: 4312 -> output: four thousand three hundred twelve
//      input: 54312 -> output: fifty four thousand three hundred twenty one
//      input: 54312 -> output: fifty four thousand three hundred twelve

var digit = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];
var teen = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
var tens = [ '', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


function assertEquals(a, b) {
  if (a === b) {
    return 'passed ' + a + ' = ' + b;
  } else {
    return 'expected "' + a + '" got "' + b + '"';
  }
}

function divideToInteger(number, divisor) {
  var result = Math.floor(number / divisor);
  //console.log('divideToInteger', number, divisor, result);
  return result;
}

function decomposeInteger(number) {
  var retVal = ''; 
  var pos = number % 1000;
  pos = divideToInteger(pos, 100);
  if (pos > 0) {
    retVal += digit[pos] + ' hundred ';
  }
  
  pos = number % 100;
  if (pos < 20 && pos > 9) {
    pos = number % 10;
    retVal += teen[pos] + ' ';
  } else {
    pos = divideToInteger(pos, 10);
    if (pos > 0) {
      retVal += tens[pos] + ' ';
    }
    
    pos = number % 10;
    if (pos > 0) {
      retVal += digit[pos] + ' ';
    }
  }
  return retVal;
}

function convertIntegerToWords(number) {
  var answer = '';
  if (number > 1000) {
     var thousands = Math.floor(number / 1000);
     answer += decomposeInteger(thousands);
     answer += 'thousand ';
  }
  
  answer += decomposeInteger(number);
  return answer.trim();
}

console.log(assertEquals("one", convertIntegerToWords(1)));
console.log(assertEquals("twelve", convertIntegerToWords(12)));
console.log(assertEquals("twenty", convertIntegerToWords(20)));
console.log(assertEquals("three hundred", convertIntegerToWords(300)));
console.log(assertEquals("four thousand", convertIntegerToWords(4000)));
console.log(assertEquals("fifty thousand", convertIntegerToWords(50000)));
console.log(assertEquals("fifty four thousand three hundred twenty one", convertIntegerToWords(54321)));
console.log(assertEquals("fifty four thousand three hundred twelve", convertIntegerToWords(54312)));
