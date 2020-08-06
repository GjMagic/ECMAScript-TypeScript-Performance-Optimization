// 答案：10
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i)
  }
}

a[6]()
/*
  解析：因为for循环用var声明变量，只有等for循环执行完才会继续执行a[6]()这行代码，此时变量i为10，所以在a数组中，下标为6的函数打印出10
*/