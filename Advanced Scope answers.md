# Question1:
- change the type of counter i from var to let : 
- Using let creates a new lexical scope for each iteration of the loop, ensuring that each callback function captures the correct value of i.
 ```
  for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log("value of [i] is: ", i);
  }, 100);
}
  ```


# Question2:
- change the positiion of the first and last statement in for loop code:
```
let array = [];
for (let i = 0; i < 5; i++) {
  array.push(i);
}
console.log("Current array is: ", array);
```

# Quesiotn3:
change the type of counter i from var to let : 
```
let functions = [];

for (let i = 0; i < 5; i++) {
  functions.push(() => {
    console.log("Current value of i is:", i);
  });
}

functions.forEach((func) => func());
```
