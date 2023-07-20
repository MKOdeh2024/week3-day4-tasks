const privateCounter = (function () {
  let count = 0; // Private variable

  function increment() {
    count++;
  }

  function getCount() {
    return count;
  }

  return {
    increment,
    getCount,
  };
})();

console.log(privateCounter.getCount()); // Output: 0
privateCounter.increment();
console.log(privateCounter.getCount()); // Output: 1
privateCounter.increment();
console.log(privateCounter.getCount()); // Output: 2
