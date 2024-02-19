// 已知异步方法
function add(a, b, callback) {
  return setTimeout(() => {
    callback(a + b)
  })
}

// 实现...
// async function sum(...args) {}

// 效果
// sum(1, 2, 3).then((value) => console.log(value)); // => 6

const _add = (a, b) => {
  return new Promise((resolve) => {
    add(a, b, (res) => resolve(res))
  })
}

async function sum(...args) {
  let res = 0
  for (const arg of args) {
    res = await _add(res, arg)
  }
  return res
}

sum(1, 2, 3).then((value) => console.log(value)); // => 6


