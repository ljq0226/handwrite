
//call\apply\bind

// fn.apply(obj,arr)
function myApply(context, arr) {
  context = context || window
  const fn = Symbol()
  context[fn] = this
  const res = arr.length ? context[fn](arr) : context[fn]()
  delete context[fn]
  return res
}

//显示绑定 This 
const MyApply = (context,arr)=>{
  context = context || window
  const fn = Symble()
  context[fn] = this
  const res = arr.length ? context[fn](arr) : context[fn]()
  delete context[fn]
  return res
}

function myCall(context, ...args) {
  context = context || window
  const fn = Symbol()
  context[fn] = this
  const res = context[fn](...args)
  delete context[fn]
  return res
}

const MyCall = (context,...args)=>{
  context = context || window
  const fn = Symble()
  context[fn] = this
  const res = context[fn](...args)
  delete context[fn]
  return res
}

// const f = fn.bind(obj,...args)
function myBind(context, ...args) {
  if (typeof this !== 'function') {
    throw TypeError('type error,must be a functino')
  }
  context = context || window
  const fn = this
  return function F() {
    return fn.apply(
      this instanceof F ? this : context,
      args.concat(...arguments)
    )

  }
}

const MyBind = (context,...args)=>{
  if(typeof this !== 'function'){
    throw TypeError('type error,must be a function')
  }
  context = context || window
  const fn = this
  return function F(){
    return fn.apply(
      this instanceof F ? this : context,
      args.concat(...arguments)
    )
  }
}



//sort

//[2,1,6,3,4,5]
const quickSort = (nums) => {
  const len = nums.length
  if (len <= 1) return nums
  const mid = Math.floor(len / 2)
  const base = nums.splice(mid, 1)[0]
  const left = []
  const right = []
  nums.forEach(num => {
    if (num < base) left.push(num)
    else right.push(num)
  });
  return quickSort(left).concat(base).concat(quickSort(right))
}
const nums = [2, 1, 6, 3, 4, 5]
// console.log('quickSort(nums)', quickSort(nums))

const QuickSort = (nums)=>{
  const len = mums.length
  const mid = Math.floor(len/2)
  const base = nums.splice(mid,1)[0]
  const left = []
  const right = []
  nums.forEach(num=>{
    if(num < base) left.push(num)
    else right.push(num)
  })
  return QuickSort(left).concat(base,QuickSort(right))
}

const MergeSort = (nums)=>{
  const len = nums.length
  if(len<=1) return nums
  const mid = Math.floor(len/2)
  const left = MergeSort(nums.slice(0,mid))
  const right = MergeSort(nums.slice(mid,len))
  const merge = (left,right)=>{
    let [l,r] = [0,0]
    const res = []
    while(l<left.length&&r<right.length){
      if(left[l]<right[r]){
        res.push(left[l])
        l++
      }else{
        res.push(right[r])
        r++
      }
    }
    return res.concat(left.slice(l)).concat(right.slice(r))
  }
  return merge(left,right)
}


const mergeSort = (nums) => {
  const len = nums.length
  if (len <= 1) return nums
  const mid = Math.floor(len / 2)
  const left = mergeSort(nums.slice(0, mid))
  const right = mergeSort(nums.slice(mid,len))
  function merge(left, right) {
    let [l, r] = [0, 0]
    const res = []
    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        res.push(left[l])
        l++
      } else {
        res.push(right[r])
        r++
      }
    }
    return res.concat(left.slice(l)).concat(right.slice(r))

  }
  return merge(left, right)
}
// console.log('mergeSort(nums)',mergeSort(nums))

//throttle/debounce

function debounce(fn,wait){
  let timerId = null
  return function(...args){
    clearTimeout(timerId)
    timerId = setTimeout(()=>{
      fn.apply(this,args)
    },wait)
  }
}
//点击 n秒后才执行
function debounce(fn,wait){
  let timerId = null
  return function(...args){
    clearTimeout(timerId)
    timerId = setTimeout(()=>{
      fn.apply(this,args)
    },wait)
  }
}

//n 秒之间只执行一次

function throttle(fn,time){
  let pretime
  return function(...args){
    let now = new Date()
    if(now-pretime>delay){
      fn.apply(this,args)
      pretime = now
    }
  }

}


function throttle(fn,delay){
  let preTime 
  return function(...args){
    let now = new Date()
    if(now-preTime>delay){
      fn.apply(this,args)
      preTime = now
    }
  }
}

//async control
function controller(list,num){
 function fn(){
  const len = list.length
  if(!len) return 
  let max = Math.min(len,num)
  for(let i =0;i<max;i++){
    const p = list.shift()
    num--
    p.finally(()=>{
      num++
      fn()
    })
  }
 }
 fn()
}
const AsyncFunction= (index)=>{
  const time = Math.random()*1000*index
  return new Promise((resolve)=>{
    setTimeout(()=>{
    console.log(`This is ${index} async func,time: ${time}`)
    resolve()
    },time)
  })
}
const list = []
// for(let i =1;i<=10;i++){
//   list.push(AsyncFunction(i))
// }
// controller(list,3)

//copy shallow/deep
// const shallowCopy=(target)=>{
//   if(typeof target !=='object' || target === null)
//   return target
//   const cloneTarget = Array.isArray(target)?[]:{}

//   Object.keys(target).forEach(key=>{
//     cloneTarget[key] = target[key]
//   })
//   return cloneTarget
// }

// const deepClone = (target,map = new WeakMap())=>{
//   if(typeof target !=='object' || target === null) return target
//   const constructor = tackrget.constructor
//   if(/^(Function|Map|Date|Set|RegExp)$/i.test(constructor.name)){
//     return new constructor(target)
//   }
//   if(map.get(target)) return map.get(target)
//   const cloneTarget = Array.isArray(target)?[]:{}
//   target.forEach((key)=>{
//     cloneTarget(key) = deepClone(target[key],map)
//   })
//   return cloneTarget
// }

const deepClone = (target,map = new WeakMap())=>{
  if(typeof target !=='object' || target ===null){
    return target
  }
  const constructor = target.constructor
  if(/^(Function|Map|Set|Date|RegExp)$/i.test(constructor.name)){
    return new constructor(target)
  }
  if(map.get(target)){
    return map.get(target)
  }
  const cloneTarget = Array.isArray(target)?[]:{}
  map.set(target,cloneTarget)
  Object.keys(target).forEach((key)=>{
    cloneTarget[key] = deepClone(target[key],map)
  })
  return cloneTarget
}
// 原始对象
const obj1 = {
  name: 'John',
  age: 25,
  hobbies: ['reading', 'playing guitar'],
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA'
  }
};

// 深拷贝对象
const obj2 = deepClone(obj1);

// 修改拷贝对象的值
obj2.name = 'Alice';
obj2.hobbies.push('painting');
obj2.address.city = 'San Francisco';

// 输出原始对象和拷贝对象
// console.log(obj1);
// console.log(obj2);

class EventBus{
  constructor(){
    this.task = {}
  }
  on(type,fn){
    if(!this.task[type]){
      this.task[type] = []
    }
    this.task[type].push(fn)
  }
  emit(type,...args){
    if(this.task[type]){
      this.task[type].map(item=>{
        item(...args)
      })
    }
  }
  off(type,fn){
    if(this.task[type]){
      this.task[type] = this.task[type].filter(item=>item!==fn)
    }
  }
  once(type,fn){
    const f = (...args)=>{
      fn(...args)
      this.off(type,fn)
    }
    this.on(type,f)
  }
}

//发布订阅
class Eventbus{
  constructor(){
    this.task = {}
  }
  on(type,fn){
    if(!this.task[type]){
      this.task[type] = []
    }
    this.task[type].push(fn)
  }
  emit(type,...args){
    if(this.task[type]){
      this.task[type].map(item=>{
        item(...args)
      })
    }
  }
  off(type,fn){
    if(this.task[type]){
      this.task[type] = this.task[type].filter(item=>item!==fn)
    }
  }
  once(type,fn){
    const f = (...args)=>{
      f(...args)
      this.off(type,fn)
    }
    this.on(type,f)
  }
}

