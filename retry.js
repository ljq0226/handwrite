function retryRequest(requestFn, retryCount, interval) {
  return new Promise((resolve, reject) => {
    const makeRequest = async () => {
      try {
        const result = await requestFn();
        resolve(result); // 请求成功，返回结果
      } catch (error) {
        if (retryCount === 0) {
          reject(error); // 重试次数用完，结束并返回错误
        } else {
          retryCount--; // 减少重试次数
          setTimeout(makeRequest, interval); // 等待一定时间后进行重试
        }
      }
    };

    makeRequest();
  });
}

const retry = (fn,count,interval)=>{
  return new Promise((resolve,reject)=>{

    const makeRequest = async ()=>{
      try{
        const res = await fn()
        resolve(res)
      }
      catch(error){
        if(count===0){
          reject(error)
        }else{
          count--
          setTimeout(makeRequest,interval)
        }
      }
    }
    makeRequest()
  })
}
