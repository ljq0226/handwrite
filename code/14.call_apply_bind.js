// 手写call
//fn.call(obj,1,2)
Function.prototype.call = function (context, ...args) {
  context = context || window
  let fn = Symbol()
  context[fn] = this
  let res = context[fn](...args)
  delete context[fn]
  return res
}
Function.prototype.apply = function (context, args) {
  context = context || window
  let fn = Symbol()
  context[fn] = this
  const res = context[fn](...args)
  delete context[fn]
  return res
}
Function.prototype.call = function (context, ...args) {
  // context为undefined或null时，则this默认指向全局window
  if (context === undefined || context === null) {
    context = window
  }
  // 利用Symbol创建一个唯一的key值，防止新增加的属性与obj中的属性名重复
  let fn = Symbol()
  // this指向调用call的函数
  context[fn] = this
  // 隐式绑定this，如执行obj.foo(), foo内的this指向obj
  let res = context[fn](...args)
  // 执行完以后，删除新增加的属性
  delete context[fn]
  return res
}
// apply与call相似，只有第二个参数是一个数组，
Function.prototype.apply = function (context, args) {
  if (context === undefined || context === null) {
    context = window
  }
  let fn = Symbol()
  context[fn] = this
  let res = context[fn](...args)
  delete context[fn]
  return res
}
//const bindfn = fn.bind(obj,1,2)
Function.prototype.bind = function (context, ...args) {
  context = context || window
  let fn = Symbol()
  context[fn] = this
  return function F() {
    return fn.apply(this instanceof F ? this : context)
  }
}

// bind要考虑返回的函数，作为构造函数被调用的情况
Function.prototype.Bind = function (context, ...args) {
  if (context === undefined || context === null) {
    context = window
  }
  let fn = this
  let f = Symbol()
  const result = function (...args1) {
    if (this instanceof fn) {
      // result如果作为构造函数被调用，this指向的是new出来的对象
      // this instanceof fn，判断new出来的对象是否为fn的实例
      this[f] = fn
      this[f](...args1, ...args)
      delete this[f]
    } else {
      // bind返回的函数作为普通函数被调用时
      context[f] = fn
      context[f](...args1, ...args)
      delete context[f]
    }
  }
  // 如果绑定的是构造函数 那么需要继承构造函数原型属性和方法
  // 实现继承的方式: 使用Object.create
  result.prototype = Object.create(fn.prototype)
  return result
}

function myBind(context, ...args) {
  if (typeof this !== 'function') {
    throw TypeError('type error,must be a functino')
  }
  context = context || window
  const fn = this
  return function F() {
    return fn.apply(this instanceof F ? this : context, args.concat(...arguments))
  }
}

const p = fn.bind(obj, ...args)
Function.prototype.bind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('must be a function')
  }
  context = context || window
  const fn = this
  return function F() {
    return fn.apply(this instanceof F ? this : context, args.concat(...arguments))
  }
}
