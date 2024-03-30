const obj = {
  a:1,
  b:[2,3],
  c:{}
}

const convertObj = (obj)=>{
  const res = {}
  for (const key in obj) {
    const value = obj[key]
    res[value] = key
  }
  return res
}
console.log(convertObj(obj))
