/* instead of make double nested loop that will cost O(n^2) , we just make a single loop and 
caching the values everytime and compare
*/

const isUnique = (arr) => {
  // Quadratic  O(n^2)
    const breadcrumbs = {};
    let result = true;

    for (let i = 0; i < arr.length; i++) {
        console.log(`~~~~~~~~~~~~~~ OTUER LOOP ~~~~~~~~~ i === ${i}`);
        if (breadcrumbs[arr[i]]) {
            result = false;
        } else {
            breadcrumbs[arr[i]] = true;
        }
    }
    return result;
};

console.log(isUnique([1,2,3]))
console.log(isUnique([1,1,3]))
