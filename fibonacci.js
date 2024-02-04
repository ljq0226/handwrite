const fibonacci = (n)=>{
  if(n==0) return 0
  if(n==1|| n==2) return 1
  return fibonacci(n-2) + fibonacci(n-1)
}
const fibonacci2 = (n)=>{
  if(typeof fibonacci2[n]!=='undefined'){
    return fibonacci2[n]
  }
  if(n==0) return 0
  if(n==1|| n==2) return 1
  const res = fibonacci2[n-2] + fibonacci2[n-1]
  fibonacci2[n] = res
  return res
}

console.time('fibonacci')
const res = fibonacci(30)
console.timeEnd('fibonacci')
console.time('fibonacci2')
const res2 = fibonacci(30)
console.timeEnd('fibonacci2')
