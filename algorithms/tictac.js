function isBoardValid(input1) {
    let board = input1;
    if ((board[0] === board[1]) === board[2]) {
      console.log(1) ;
    } else if ((board[3] === board[4]) === board[5]) {
      console.log(1) ;
    } else if ((board[6] === board[7]) === board[8]) {
      console.log(1) ;
    } else if ((board[0] === board[3]) === board[6]) {
      console.log(1) ;
    } else if ((board[1] === board[4]) === board[7]) {
      console.log(1) ;
    } else if ((board[2] === board[5]) === board[8]) {
      console.log(1) ;
    } else if ((board[0] === board[4]) === board[8]) {
      console.log(1) ;
    } else if ((board[2] === board[4]) === board[6]) {
      console.log(1) ;
    } else {
        let res = 1;
        for (let i = 0; i < input1.length; i++) {
            if (input1[i] < 0) {
                res = 0;
           } 
        }
        console.log(res);
    }
}


let data = [ 1, 1, 2, 2, 1, 1, 1, 2, 2]
console.log(isBoardValid(data));