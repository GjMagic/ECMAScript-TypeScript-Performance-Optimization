function foo (bar, val = true, ...args) {
  console.log(val)
  console.log(bar)
  console.log(args)
}

foo(1, 2, 3, 4)