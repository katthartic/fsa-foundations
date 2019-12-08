const reverseString = (str) => {
    let reversedString = '';
    for (let lastIndex = str.length - 1; lastIndex >= 0; lastIndex--) {
      reversedString += str[lastIndex];
    }
      return reversedString;
  }


  reverseString('hello world');
