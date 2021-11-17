
function returnMax(arr) {
  let max = 0;
  arr.forEach((x) => {
    if (x > max) {
      max = x;
    }
  });
  return max;
}

function main(n) {
    if(n >= 1 && n <= 10000000) {
        let bi = Number(n).toString(2);
        let countAll = [];
      let counter = 0;
      bi.split("").forEach((x , i) => {
        if (x === "1" && i < bi.length - 1) {
            counter++;
        } else if (x === "0") {
            countAll.push(counter);
            counter = 0;
        } else if (x === "1" && i === bi.length - 1) {
            counter++;
            countAll.push(counter);
        }
      });
      console.log(bi, returnMax(countAll));
    } else {
        return "Invalid input";
    }
}



console.log(main(1));
console.log(main(2));
console.log(main(13));
console.log(main(125));
console.log(main(439));