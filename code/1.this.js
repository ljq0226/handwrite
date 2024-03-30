var length = 10
function fn() {
  console.log(this.length)
}
var obj = {
  length: 5,
  method: function (fn) {
    fn()
    arguments[0]()
  },
}
obj.method(fn, 1)

// 箭头函数 的 this 继承自包围它的函数或全局作用域
var a = 10
const obj = {
  a: 30,
  say() {
    return () => console.log(this.a)
  },
}

// obj.say()()
const func = obj.say()
console.log(func.toString())
func()
