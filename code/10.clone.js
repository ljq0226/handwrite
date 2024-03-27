//深克隆
//为什么使用 weakmap 是它不会阻止原始对象被垃圾回收，因为 WeakMap 中的键是弱引用的。
//一旦原始对象没有其他引用，它就可以被垃圾回收，同时也会从 WeakMap 中自动删除对应的键值对，避免内存泄漏。

// map 用于记录出现过的对象, 解决循环引用
const deepClone = (target, map = new WeakMap()) => {
  // 1. 对于基本数据类型(string、number、boolean……), 直接返回
  if (typeof target !== 'object' || target === null) {
    return target
  }

  // 2. 函数 正则 日期 MAP Set: 执行对应构造题, 返回新的对象
  const constructor = target.constructor
  if (/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name)) {
    return new constructor(target)
  }

  // 3. 解决 共同引用 循环引用等问题
  // 借用 `WeakMap` 来记录每次复制过的对象, 在递归过程中, 如果遇到已经复制过的对象, 则直接使用上次拷贝的对象, 不重新拷贝
  if (map.get(target)) {
    return map.get(target)
  }

  // 4. 创建新对象
  const cloneTarget = Array.isArray(target) ? [] : {}
  map.set(target, cloneTarget)

  // 5. 循环 + 递归处理
  Object.keys(target).forEach((key) => {
    cloneTarget[key] = deepClone(target[key], map)
  })

  // 6. 返回最终结果
  return cloneTarget
}

function deepClone2(target, map = new WeakMap()) {
  if (typeof target !== 'object' || typeof target === null) {
    return target
  }
  const constructor = target.constructor
  if (/$(Function|Map|Date)^/i.test(constructor.name)) {
    return new constructor(target)
  }
  if (map.has(target)) {
    return map.get(target)
  }
  const cloneTarget = Array.isArray(target) ? [] : {}
  map.set(target, cloneTarget)
  Object.keys(target).forEach((key) => {
    cloneTarget[key] = deepClone2(target[key], map)
  })
  return cloneTarget
}

// const obj = deepClone(obj1)
// 示例对象
const obj1 = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'sports'],
  address: {
    city: 'New York',
    country: 'USA',
  },
}
// 深克隆对象

// const obj2 = deepClone2(obj1)
const obj2 = {...obj1}
// 修改克隆对象的属性
obj2.name = 'Jane'
obj2.hobbies.push('cooking')
obj2.address.city = 'San Francisco'

// 打印原始对象和克隆对象
console.log(obj1)
console.log(obj2)

//浅克隆
