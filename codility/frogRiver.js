function solution(X, A) {
    let riverPostion = new Array(X + 1).fill(false);
    for (let i = 0; i < A.length; i++) {
        let pos = A[i];
        if(!riverPostion[pos]) {
            riverPostion[pos] = true;
            X -= 1;
            if(X === 0) return i;
        }
    }
    return -1
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]))
console.log(solution(1, [1,1,1]));
console.log(solution(3, [1,2,1]));