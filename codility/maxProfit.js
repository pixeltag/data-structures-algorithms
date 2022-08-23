function solution(A) {
    let globalMaxSum = 0;
    let localMaxSum = 0;

    for (let i = 1; i < A.length; i++) {
        let d = A[i] - A[i - 1];
        localMaxSum = Math.max(d, localMaxSum + d);
        globalMaxSum = Math.max(localMaxSum, globalMaxSum);
    }
    return globalMaxSum
}