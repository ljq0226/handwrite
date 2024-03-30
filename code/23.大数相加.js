function bigNumberAdd(num1, num2) {
  let i = num1.length - 1
  let j = num1.length - 1
  let carry = 0
  let res = ''
  while (i >= 0 || j >= 0) {
    let n1 = i >= 0 ? num1.charAt(i) - 0 : 0
    let n2 = j >= 0 ? num2.charAt(j) - 0 : 0
    let sum = carry + n1 + n2
    carry = Math.floor(sum / 10)
    res = (sum % 10) + res
    i--
    j--
  }
  if (carry) {
    res = carry + res
  }
  return res
}

// function bigNumberAdd(num1, num2) {
//   let i = num1.length - 1;
//   let j = num2.length - 1;
//   let carry = 0; // 进位
//   let result = '';
//   while (i >= 0 || j >= 0) {
//       let n1 = i >= 0 ? num1.charAt(i) - '0' : 0;
//       let n2 = j >= 0 ? num2.charAt(j) - '0' : 0;
//       let sum = n1 + n2 + carry;
//       carry = Math.floor(sum / 10);
//       result = (sum % 10) + result;
//       i--;
//       j--;
//   }

//   if (carry > 0) {
//       result = carry + result;
//   }

//   return result;
// }
let num1 = '12345678901234567890'
let num2 = '98765432109876543210'
let sum = bigNumberAdd(num1, num2)
console.log(sum)

function bigNumberAdd(a, b) {
  const bigA = BigInt(a);
  const bigB = BigInt(b);

  return (bigA + bigB).toString();
}

console.log(bigNumberAdd("12345678901234567890", "98765432109876543210"));

