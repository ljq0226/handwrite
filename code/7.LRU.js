/**
 * @param {number} capacity
 */
class LRUCache{
  constructor(max){
    this.max = max
    this.cache = new Map()
  }
  get(k){
    const cache = this.cache
    if(!cache.has(k)){
      console.log(k+'不存在')
      return -1
    }
    const v = cache.get(k)
    cache.delete(k)
    cache.set(k,v)
    console.log('v',v)
    return v
  }

  put(k,v){
    const cache = this.cache
    if(cache.has(k)){
      cache.delete(k)
    }
    cache.set(k,v)
    if(cache.size>this.max){
      cache.delete(cache.keys().next().value)
    }
    return v
  }
}

const cache = new LRUCache(2 /* 缓存容量 */)

cache.put(1, 1)
cache.put(2, 2)
cache.get(1) // 返回  1
cache.put(3, 3) // 该操作会使得密钥 2 作废
cache.get(2) // 返回 -1 (未找到)
cache.put(4, 4) // 该操作会使得密钥 1 作废
cache.get(1) // 返回 -1 (未找到)
cache.get(3) // 返回  3
cache.get(4) // 返回  4
