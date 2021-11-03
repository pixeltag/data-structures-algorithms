function reverseArray(a) {
  // Write your code here
  if (Array.isArray(a)) {
        let reversedArr = [];
        a.forEach(e => {
            reversedArr.unshift(e);
        })
      return reversedArr;
     
      //   return reverseArray;
    }
}

let newArr = reverseArray([3, 4, 2, 1]);
console.log(newArr);
