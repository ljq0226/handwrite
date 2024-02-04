function create(obj) {
  function F() { }
  F.prototype = obj
  return new F()
}



function MyInstanceOf(left, right) {
  let proto = Object.getPrototypeOf(left)
  let prototype = right.prototype
  while (true) {
    if (!proto) return false
    if (proto === prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}

function myNew(constructor,...args){
  //1.创建空对象
  const obj = {}
  //2.绑定原型
  Object.setPrototypeOf(obj,constructor.prototype)
  //3.绑定 this
  const res = constructor.apply(obj,args)
  //4.判断返回值
  if(typeof res ==='object'&& res!==null) return res 
  return obj
}

function MyInstance(left,right){
  let proto = Object.getPrototypeOf(left)
  let prototype = right.prototype
  while(true){
    if(!proto) return false
    if(proto === prototype) return true
    proto =Object.getPrototypeOf(proto)
  }  
}

console.log(MyInstance({a:'asd'},Object));

function Person(name){
  this.name = name
}

const p1 = myNew(Person,'asd')
console.log('p1',p1)


function getType(value){
  if(value===null) return 'null'
  if(typeof value !== 'object') return value
  else{
    let valueClass = Object.prototype.toString.call(value)
    // [Obejct Type]
    return valueClass.slice(8,-1)
  }
}
const a = ()=>{}
console.log(getType(new Map()))
