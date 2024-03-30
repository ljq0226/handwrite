// deboucne(fn,500)
function deboucne(fn, wait) {
  let timer = null
  return function () {
    let _this = this
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(_this, args)
    }, wait)
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
//n 秒内执行一次

function throttle(fn, time) {
  let t1 = 0
  return function () {
    let now = new Date()
    if (now - t1 > time) {
      t1 = now
      fn.apply(this, arguments)
    }
  }
}

function throttle(fn, wait) {
  let t1 = 0
  return function () {
    let now = Date.now()
    if (now - t1 > wait) {
      t1 = now
      fn.apply(this, arguments)
    }
  }
}
function throttle(fn, wait) {
  let timer = null
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
        timer = null
      }, wait)
    }
  }
}
function throttle(fn, wait) {
  let timer = null

  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
        timer = null
      }, wait)
    }
  }
}
