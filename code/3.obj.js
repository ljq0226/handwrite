function MyNew(constructor, ...args) {
  const obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  const res = constructor.apply(obj, args)
  return typeof res === 'object' ? res : obj
}
