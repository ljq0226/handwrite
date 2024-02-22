//手写new操作符

const myNew = (construct, ...args) => {
  let obj = {}
  Object.setPrototypeOf(obj, construct.prototype)
  const res = construct.apply(obj, args)
  if (typeof res === 'object' && res !== null) return res
  return obj
}

