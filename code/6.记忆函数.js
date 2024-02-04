// memoize
// 创建一个 `memoize` 函数，根据指定的缓存大小和逐出策略缓存函数调用的结果。 使用基于先进先出 (FIFO) 的消除策略.

// **示例:**

// ```javascript
// const expensiveCalculation = (x) => {
//   console.log(`Calculating for ${x}`);
//   return x * 2;
// };

// const memoizedCalculation = memoize(expensiveCalculation, 2);

// console.log(memoizedCalculation(5)); // Calculating for 5, Output 10
// console.log(memoizedCalculation(5)); // Output 10 (no additional calculation)
// console.log(memoizedCalculation(10)); // Calculating for 10, Output  20
// ```


function memoize(func, cacheSize = 10000) {
  const cache = new Map()
  const cacheQueue = []

  return function (...args) {
    const key = JSON.stringify(args)

    if (cache.has(key)) {
      // Update the queue to move the used key to the end
      const index = cacheQueue.indexOf(key)
      cacheQueue.splice(index, 1)
      cacheQueue.push(key)

      return cache.get(key)
    }

    const result = func.apply(this, args)

    if (cache.size >= cacheSize) {
      // Remove the oldest item from the cache and the queue
      const oldestKey = cacheQueue.shift()
      cache.delete(oldestKey)
    }

    cache.set(key, result)
    cacheQueue.push(key)

    return result
  }
}
