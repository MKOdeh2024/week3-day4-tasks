function generateFibonacci(count) {
  let currentCount = 0;
  let fibonacciSequence = [0, 1];

  function fibonacci() {
    if (currentCount >= count) {
      return null; // Return null after generating 'count' numbers
    }

    const nextNumber =
      fibonacciSequence[currentCount] + fibonacciSequence[currentCount + 1];
    fibonacciSequence.push(nextNumber);
    currentCount++;

    return nextNumber;
  }

  return fibonacci;
}

const fibonacciClosure = generateFibonacci(10); // Change 10 to the desired 'count'

for (let i = 0; i < 10; i++) {
  // Change 10 to the same 'count' used above
  console.log(fibonacciClosure());
}
