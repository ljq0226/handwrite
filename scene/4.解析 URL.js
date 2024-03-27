// parseUrl('https://www.meituan.com/index.html?a=test&b=2.1')

function parseUrl(url){
  const args = url.substr(url.indexOf('?')+1)
  const argsArr = args.split('&')
  const obj = {}
  argsArr.map(item=>{
    const [key,value] = item.split('&')
    obj[key] = value
  })
  return obj
}

const parseUrl = (url)=>{
  const args = url.substr(url.indexOf('?')+1)
  const argsArr = args.split('&')
  const obj = {}
  argsArr.map((item)=>{
    const index = item.indexOf('=')
    const key = item.slice(0,index)
    let value = item.slice(index+1)
    if(!Number.isNaN(parseInt(value))){
      obj[key] = +value
    }else{
      obj[key] = value
    }
  })
  return obj
}

const res = parseUrl('https://www.meituan.com/index.html?a=test&b=2.1')
console.log('res',res)
