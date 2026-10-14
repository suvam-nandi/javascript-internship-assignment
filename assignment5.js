
console.log("\n--- Assignment 5 ---");
function calculateAreaStandard(length = 5, width = 4) {
  return length * width;
}

const calculateAreaArrow = (length = 5, width = 4) => length * width;

console.log(`Standard Function Area (Default 5x4): ${calculateAreaStandard()}`);
console.log(`Arrow Function Area (Custom 10x3): ${calculateAreaArrow(10, 3)}`);

{
  let blockVar = "Inside Block";
}

try {
  console.log(blockVar);
} catch (error) {
  console.log(`Scope Test Error: ${error.name}: ${error.message} (when accessed outside block)`);
}
