const myInstanceOf = (left,right)=>{
  let proto = Object.getPrototypeOf(left)
  let prototype = right.prototype
  while(true){
    if(!proto) return false
    if(proto === prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}

// console.log(MyInstanceOf('a', String));

function MyInstanceOf(left,right){
  let proto = Object.getPrototypeOf(left)
  let prototype = right.prototype
  while(true){
    if(!proto) return false
    if(proto === prototype){
      return true
    }
      proto = Object.getPrototypeOf(proto)
  }
  return false
}
