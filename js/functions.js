function checkLength(str, maxLength) {
    if (str.length <= maxLength) {
      return true;
    }
    return false;
  };


  
function isPalindrome(str) {
    str = str.toLowerCase();
    let cleanStr = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        cleanStr = cleanStr + str[i];
      }
    }
    let reversed = '';
    for (let i = cleanStr.length - 1; i >= 0; i--) {
      reversed = reversed + cleanStr[i];
    }
    return cleanStr === reversed;
  };


  
  function extractDigits(value) {
    value = String(value); // превращаем в строку
  
    let result = '';
  
    for (let i = 0; i < value.length; i++) {
      const char = value[i];
  
      // если символ — цифра
      if (char >= '0' && char <= '9') {
        result = result + char;
      }
    }
  
    if (result === '') {
      return NaN;
    }
  
    return Number(result);
  };  