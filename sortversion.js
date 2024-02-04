
const compareVersion = function(version1, version2){
    const arr1 = version1.split('.');// 得到的是字符串数组
    const arr2 = version2.split('.');
    // 获取最大长度，进行比较
    const len = Math.max(arr1.length, arr2.length);
    for(let i = 0; i < len; i++){
        // 要进行长度的比较判断
        const num1 = i >= arr1.length ? 0 : parseInt(arr1[i]);
        const num2 = i >= arr2.length ? 0 : parseInt(arr2[i]);
        if(num1 > num2){
            return 1;
        }else if(num1 < num2){
            return -1;
        }
    }
    return 0;
}
const versions = ["1.2.1", "1.0.2", "1.3.2", "1.1", "1.2", "1", "1.10.0"]; 
// 升序排序 
versions.sort(compareVersion); 
console.log(versions); // ["1", "1.0.2", "1.1", "1.2", "1.2.1", "1.3.2", "1.10.0"] 
// 降序排序 
versions.sort((a, b) => compareVersion(b, a)); 
console.log(versions); // ["1.10.0", "1.3.2", "1.2.1", "1.2", "1.1", "1.0.2", "1"]
