
console.log("\n--- Assignment 6 ---");
const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 }
];

console.log("All Products (forEach)");
products.forEach(p => {
  console.log(`Item: ${p.name}`);
  console.log(`Price: $${p.price}`);
});

const cheapProducts = products.filter(p => p.price < 50);
console.log("Filtered Products (Price < $50)", cheapProducts);

const mappedTags = products.map(p => `${p.name.toUpperCase()} costs $${p.price}`);
console.log("Mapped Product Tags (map)", mappedTags);
