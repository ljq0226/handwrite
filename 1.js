// try {
//   console.log(1)
//   setTimeout(() => {
//     console.log(2)
//   }, 0)
//   function trycatch() {
//     console.log(a.b)
//   }
//   new Promise(() => {
//     console.log(4)
//     trycatch()
//     console.log(5)
//   })
// } catch (e) {
//   console.log(6)
// }
// console.log(7)

// async function async1() {
//   await Promise.reject('error!!!')
//   console.log('async1')
//   return Promise.resolve('async1 success')
// }
// async1().then((res) => console.log(res)).catch(e=>console.log(e))
// console.log('script start')

var a=3;
function c(){
   console.log(a);
}
(function(){
 var a=4;
 c();
})();
