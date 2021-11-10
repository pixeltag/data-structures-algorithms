function main(input1, input2, input3) {
  let targetAmount = [];
  return calculateTargetAmount(input1, input3, targetAmount);
}

function calculateTargetAmount(arr, target, targetAmount) {
  let number = arr[arr.length - 1];
  let bigCount = Math.floor(target / number);
  let remain = target - bigCount * number;
  let remainArr = arr.slice(0, -1); // TC = Linear

  for (let i = 0; i < bigCount; i++) {
    // TC = Linear
    targetAmount.push(number); // TC = Constant
  }

  if (remain > 0) {
    return calculateTargetAmount(remainArr, remain, targetAmount);
  }

  return targetAmount.length;
}

console.log("TARGET AMOUNT ~~~~~~~~~~~~~~~ ", main([1, 5, 10, 25], 4, 66)); //5
