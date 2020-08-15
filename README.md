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
```javascript
let recipeMap = new Map([
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
}
```

### Arrays

##### pop()
Remove an item from the end of an array
```javascript
let cats = ['Bob', 'Willy', 'Mini'];
cats.pop(); // ['Bob', 'Willy']
```
**pop() returns the removed item.**

##### push()
Add items to the end of an array
```javascript
let cats = ['Bob'];
cats.push('Willy'); // ['Bob', 'Willy']
cats.push('Puff', 'George'); // ['Bob', 'Willy', 'Puff', 'George']
```
**push() returns the new array length.***

##### shift()
Remove an item from the beginning of an array
```javascript
let cats = ['Bob', 'Willy', 'Mini'];
cats.shift(); // ['Willy', 'Mini']
```
**shift() returns the removed item.**

##### unshift()
Add items to the beginning of an array
```javascript
let cats = ['Bob'];
cats.unshift('Willy'); // ['Willy', 'Bob']
cats.unshift('Puff', 'George'); // ['Puff', 'George', 'Willy', 'Bob']
```
**unshift() returns the new array length.**
