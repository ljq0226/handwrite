class AsyncTaskController{
  constructor(maxConcurrent,taskQueue=[]){
    //最大并发数
    this.maxConcurrent = maxConcurrent
    //当前并发数
    this.currentConcurrent = 0
    //任务执行队列
    this.taskQueue = taskQueue
  }
  addTask(task){
    this.taskQueue.push(task)
    this.next()
  }
  next(){
    if(this.currentConcurrent<this.maxConcurrent && this.taskQueue.length){
      const task = this.taskQueue.shift()
      this.currentConcurrent++
      task().then((result)=>{
        console.log('result',result)
      }).catch(error=>{
        console.log('error',error)
      }).finallly(()=>{
        this.currentConcurrent--
        this.next()
      })
    }
  }
}

class AsyncTaskControl{
  constructor(maxConcurrent){
    this.maxConcurrent = maxConcurrent
    this.taskQueue = []
    this.currentConcurrent = 0
  }
  addTask(task){
    this.taskQueue.push(task)
    this.next()
  }
  next(){
    if(this.currentConcurrent<this.maxConcurrent && this.taskQueue.length){
      this.currentConcurrent++
      const task = this.taskQueue.shift()
      task.then(res=>{
        console.log('res',res)
      }).catch(err=>{
        console.log('err',err)
      }).finallly(()=>{
        this.currentConcurrent--
        this.next()
      })
    }
   return this 
  }
}
