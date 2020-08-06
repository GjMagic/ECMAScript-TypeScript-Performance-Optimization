// 答案：20
var a = 10;
var obj = {
  a: 20,
  fn () {
    setTimeout(() => {
      console.log(this.a)
    });
  }
}

obj.fn()

/*
  解析：fn中的this指向调用它的对象obj，obj.a为20，所以打印20
*/