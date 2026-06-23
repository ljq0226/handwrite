const parseUrl = (url) => {
  const args = url.substr(url.indexOf('?') + 1).split('&')
  const obj = {}
  args.map((item) => {
    const [key, value] = item.split('=')
    obj[key] = value
  })
  return obj
}

const res = parseUrl('https://www.meituan.com/index.html?a=test&b=2.1')
console.log('res', res)
