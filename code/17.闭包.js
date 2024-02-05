function counter() {
  let count = 0;
  function increment() {
    return ++count;
  }
  return increment;
}

const counterInstance = counter();
console.log(counterInstance()); // 1
console.log(counterInstance()); // 2
console.log(counterInstance()); // 3
