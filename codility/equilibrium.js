function solution(A) {
    let leftSum = A[0];
    let rightSum = 0;
    A.slice(1).forEach(n => rightSum += n);
    let diff = Math.abs(leftSum - rightSum);

    for (let i = 1; i < A.length; i++) {
        leftSum += A[i];
        rightSum -= A[i];
        let currentDiff = Math.abs(leftSum - rightSum);
        if(diff > currentDiff) diff = currentDiff
    }
    return diff;
}

console.log(solution([3,1,2,4,3]))