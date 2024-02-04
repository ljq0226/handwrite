function rgbToHex(rgb){
  let res = ''
  const values = rgb.match(/\d+/g)
  console.log('values',values)
  return values.map(item=>item.toString(16)).join('')
  
}

// function rgbToHex(rgb) {
//   // 提取RGB值
//   const values = rgb.match(/\d+/g);
//   const red = parseInt(values[0]);
//   const green = parseInt(values[1]);
//   const blue = parseInt(values[2]);

//   // 转换为十六进制
//   const hexRed = red.toString(16).padStart(2, '0');
//   const hexGreen = green.toString(16).padStart(2, '0');
//   const hexBlue = blue.toString(16).padStart(2, '0');

//   // 拼接为十六进制颜色字符串
//   const hexColor = `#${hexRed}${hexGreen}${hexBlue}`;

//   return hexColor;
// }

// 示例用法
const rgbColor = 'rgb(25, 20, 110)';
const hexColor = rgbToHex(rgbColor);
console.log(hexColor); 
