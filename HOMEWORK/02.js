// ReferenceError: Cannot access 'tmp' before initialization
var tmp = 123;

if (true) {
  console.log(tmp)
  let tmp
}

/*
  解析：因为tmp是用let声明的，所以在if大括号内为一个块级作用域，块级作用域内用let声明了tmp，所以变量tmp不能变量提升，所以会报错
*/
