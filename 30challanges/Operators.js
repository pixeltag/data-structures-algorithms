function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    let mealCost = meal_cost;
    let tip = (mealCost / 100) * tip_percent;
    let tax = (mealCost / 100) * tax_percent;
    let total = mealCost + tip + tax;
    return Math.round(total);
}

console.log(solve(12.0, 20, 8));
