# LinkedList-In-Javascript
This repository contains solutions to popular linked list question/solution in javascript

### Map
Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

Methods and properties are:

- **new Map()** – creates the map.
- **map.set(key, value)** – stores the value by the key.
- **map.get(key)** – returns the value by the key, undefined if key doesn’t exist in map.
- **map.has(key)** – returns true if the key exists, false otherwise.
- **map.delete(key)** – removes the value by the key.
- **map.clear()** – removes everything from the map.
- **map.size** – returns the current element count.

##### Iteration Example:
`let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)
}`
