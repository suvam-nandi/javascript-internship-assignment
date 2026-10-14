console.log("\n--- Assignment 2 ---");
let rawBill = prompt("Enter bill amount:", "100");
let rawTip = prompt("Enter tip percentage:", "15");

let billAmount = Number(rawBill);
let tipPercent = Number(rawTip);

let calculatedTip = (billAmount * tipPercent) / 100;
let totalAmount = billAmount + calculatedTip;

console.log(`Subtotal: $${billAmount}`);
console.log(`Tip Percentage: ${tipPercent}%`);
console.log(`Calculated Tip: $${calculatedTip}`);
console.log(`Total Amount to Pay: $${totalAmount}`);