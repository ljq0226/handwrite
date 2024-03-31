const ligth = (color, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${color} 灯亮`)
      resolve()
    }, time)
  })
}

const controler = () => {
  ligth('red', 3000).then(() => {
    ligth('green', 2000).then(() => {
      ligth('yellow', 2000).then(() => {
        controler()
      })
    })
  })
}
// controler()

const asyncControl = async () => {
  await ligth('red', 3000)
  await ligth('green', 3000)
  await ligth('yellow', 3000)
  asyncControl()
}
asyncControl()
