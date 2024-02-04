// const  PromiseAll= (promises)=>{
//   return new Promise((resolve,reject)=>{
//     const len = promises.length
//     let res = []
//     let counter = 0
//     for(let i =0;i<len;i++){
//       Promise.resolve(promises[i]).then((value)=>{
//         // res[i] = value
//         res.push(value)
//         counter++
//         if(counter === len) return resolve(res)
//       },error=>{
//         return reject(error)
//       })
//     }
//   })
// }

// let p1 = new Promise(resolve=>{
//   setTimeout(()=>resolve(1),3000)
// })
// let p2 = new Promise(resolve=>{
//   setTimeout(()=>resolve(2),1000)
// })
// let p3 = new Promise(resolve=>{
//   setTimeout(()=>resolve(3),2000)
// })

// // PromiseAll([p1,p2,4,p3]).then(value=>{
// //   console.log('value',value)
// // })


// const PromiseRace = (promises)=>{
//   return new Promise((resolve,reject)=>{
//     const len = promises.length
//     for(let i=0;i<len;i++){
//       promises[i].then(resolve,reject)
//     }
//   })
// }
// const PromiseAny = (promises)=>{
//     return new Promise((resolve,reject)=>{
//       const len = promises.length
//       const errors =[]
//       for(let i=0;i<len;i++){
//         promises[i].then(value=>{
//           return resolve(value)
//         },error=>{
//           errors.push(error)
//           if(errors.length === len) return reject(errors)
//         })
//       }
//     })
// }
// function pipe(promises) {
//   return promises.reduce((prevPromise, currentPromise) => {
//     return prevPromise.then(result => {
//       return currentPromise(result);
//     });
//   }, Promise.resolve(2));
// }

const a = async(promise,v)=>{
  await promise(v)
}
async function pipe(promises){
 const len = promises.length
  for(let i =0;i<len;i++){
    await promises[i]
  }
}


const promise1 = input => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Promise 1");
      resolve(input + 1);
    }, 1000);
  });
};

const promise2 = input => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Promise 2");
      resolve(input * 2);
    }, 1000);
  });
};

const promise3 = input => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Promise 3");
      resolve(input - 1);
    }, 1000);
  });
};

const promises = [promise1, promise2, promise3];

// pipe(promises)
//   .then(result => {
//     console.log("Final result:", result);
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });
console.log('pipe(promises)',pipe(promises))
