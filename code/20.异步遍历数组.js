const make = (n, duration) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n);
    }, duration);
  });
}

let arr = [make(5, 1000), make(7, 500), make(2, 100), make(1, 600), make(8, 800)];


//异步执行
arr.forEach(v => v.then(console.log));
//顺序执行
arr.reduce((pre,cur)=>pre.then(()=>cur.then(console.log)),Promise.resolve())
