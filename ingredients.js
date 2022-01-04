const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

console.log("while loop: ");
let i = 0;
while(i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("for loop: ");
for(let j = 0; j < ingredients.length; j++){
  console.log(ingredients[j]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

let x = ingredients.length;
while(x >= 0){
  console.log(ingredients[x]);
  x--;
}

for(let y = ingredients.length; y >= 0; y--){
  console.log(ingredients[y]);
}