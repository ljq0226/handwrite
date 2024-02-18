// Monkey('Alan').eat('Banana').sleep(4).eat('Apple').sleep(5).eat('Pear');
// my name is Alan
// I eat Banana
// 等待 4s
// I eat Apple
// 等待 5s
// I eat Pear

class Monkey {
  constructor(name) {
    console.log(name)
    this.waittime = 0
    return this
  }
  eat(food) {
    if (this.waittime) {
      setTimeout(() => {
        console.log('i eat ', food)
      }, this.waittime * 1000)
    } else {
      console.log('i eat ', food)
    }

    return this
  }
  sleep(time) {
    setTimeout(() => {
      console.log('等待' + time + 's')
    }, this.waittime * 1000)
    this.waittime += time
    return this
  }
}

new Monkey('Alan').eat('Banana').sleep(4).eat('Apple').sleep(5).eat('Pear')
