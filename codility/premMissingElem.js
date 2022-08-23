function solution(A) {
    let actualSum = 0;
    A.forEach(element => {
        actualSum += element;
    });
    let maxNumber = A.length + 1;
    let expectedSum = (maxNumber * (maxNumber + 1) / 2);
    return expectedSum - actualSum;
}

console.log(solution([2,3,1,5]))