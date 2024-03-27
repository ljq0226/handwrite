function customSetInterval(func, delay) {
  function interval() {
      setTimeout(interval, delay);
      func();
  }
  interval();
}

// 使用示例
customSetInterval(() => console.log('Hello'), 1000);
