const reduce = (arr,callback,initValue) =>{
  const accumlator = initValue
  for(let i = 0;i<arr.length;i++){
    callback(accumlator,arr[i],i,arr)
  }
  return accumlator
}
