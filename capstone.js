console.log("Initializing Inventory System");

const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

let inputName = prompt("Enter product name:", "Monitor");
let inputPrice = Number(prompt("Enter product price:", "150"));

if (inputName && !isNaN(inputPrice)) {
  inventory.push({ name: inputName, price: inputPrice });
}

function getCategoryBadge(price) {
  if (price >= 500) return "Premium";
  if (price >= 100) return "Standard";
  return "Budget";
}

//  Processing Inventory Roster (forEach)
console.log("\nProcessing Inventory Roster (forEach)");
inventory.forEach(item => {
  let badge = getCategoryBadge(item.price);
  console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${badge}`);
});

// Financial Analytics (Functions & Scope)
console.log("\nFinancial Analytics");
const getTotalValue = (items) => items.reduce((total, item) => total + item.price, 0);
console.log(`Total Inventory Value: $${getTotalValue(inventory)}`);

// Filtered affordable items (< 200)
const affordableNames = inventory
  .filter(item => item.price < 200)
  .map(item => item.name);

console.log("Filtered Affordable Items (Under $200):", affordableNames);

// Formatted report list (map)
const formattedReport = inventory.map(item => `${item.name.toUpperCase()}: $${item.price}`);
console.log("Formatted Report List:", formattedReport);