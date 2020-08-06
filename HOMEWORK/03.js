var arr = [12, 34, 32, 89, 4]

// 法一：
console.log(Math.min(...arr))

// 法二：
const min = arr.reduce((pre, cur) => Math.min(pre, cur))
console.log(min)