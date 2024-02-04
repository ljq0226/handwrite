function debounce(fn, wait) {
  let timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}
function debounce(fn, time) {
  let timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, time)
  }
}

function debounce(fn, time) {
  let timer = null
  let isFirstCall = true

  return function () {
    clearTimeout(timer)

    if (isFirstCall) {
      fn.apply(this, arguments)
      isFirstCall = false
      return
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, time)
  }
}
function handleInput(n) {
  console.log('Input event debounced', n)
}
const debouncedHandleInput = debounce(handleInput, 300)
// 模拟触发输入事件多次
debouncedHandleInput(1) // 不会立即执行
debouncedHandleInput(2) // 不会立即执行
debouncedHandleInput(3) // 不会立即执行

function throttle(fn, wait) {
  let t1 = 0
  return function () {
    let now = new Date()
    if (now - t1 > wait) {
      fn.apply(this, arguments)
      t1 = now
    }
  }
}
function throttle(fn, wait) {
  let t1 = 0
  return function () {
    let now = new Date()
    if (now - t1 > wait) {
      t1 = now
      fn.apply(this, arguments)
    }
  }
}
