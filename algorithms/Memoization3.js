const times10 = (n) => n * 10;

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.
// passing CB function to the memo function .

const memoizedClosureTimes10 = (cb) => {
    const cache = {}

    return function (n) {
         if (cache[n]) {
           return cache[n];
         } else {
           let res = cb(n);
           cache[n] = res;
           return res;
         }
    }
};

const memoClosureTimes10 = memoizedClosureTimes10(times10);
console.log("~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~");
try {
  console.log("Task 3 calculated value:", memoClosureTimes10(9)); // calculated
  console.log("Task 3 cached value:", memoClosureTimes10(9)); // cached
} catch (e) {
  console.error("Task 3:", e);
}
