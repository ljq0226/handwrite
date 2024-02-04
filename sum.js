// const sum = (...args)=>{
//   let sum = args.reduce((pre,cur)=>pre+cur,0)
  
//   function innerSum(...innerArgs){
    
//     return sum(...args,...innerArgs)

//   }
//   innerSum.sumOff = function(){
//     return sum
//   }

//   return innerSum
// }

// console.log('sum(1,2).sumOff()',sum(1,2).sumOff())
// console.log('sum(1,2)(3).sumOff()',sum(1,2)(3).sumOff())
function sum(...args) {
  let sum = args.reduce((acc, val) => acc + val, 0);

  function innerSum(...innerArgs) {
    return sum(...args, ...innerArgs);
  }

  innerSum.sumoff = function () {
    return sum;
  };

  return innerSum;
}

console.log(sum(1, 2).sumoff()); // 输出: 3

console.log(sum(1, 2)(3).sumoff()); // 输出: 6
