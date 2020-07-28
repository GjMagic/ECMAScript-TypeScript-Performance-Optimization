// Object.assign方法

const obj1 = {
  a: 12,
  b: 12
}

const obj2 = {
  a: 13,
  b: 13
}

const obj4 = {
  c: 14,
  d: 13
}

const obj5 = {
  c: 13,
  d: 13
}

const obj3 = Object.assign(obj1, obj2, obj4, obj5)
console.log(obj3)

function func(obj) {
  const funcObj = Object.assign({}, obj)
  funcObj.name = 'func obj'
  console.log(funcObj)
}

const obj = { name: 'global obj' }
func(obj)
console.log(obj)