function processData(input) {
  //Enter your code here
    let c = input.split(" ");
    for (let i = 0; i < c[0]; i++) {
        const element = c[i + 1];
        splitChar(element);
        
    }
}

function splitChar(str) {
    let char = str.split("");
    let even = '';
    let odd = '';
    for (let d = 0; d < char.length; d++) {
        if (d % 2) {
            odd += char[d];
        } else if ((d % 2) == 0) {
            even += char[d]
        }
    }
    console.log(even + " " + odd)
}


let _input = "2 Hacker Rank"
processData(_input);