// for of 循环

const arr = [100, 200, 300, 400]
for (const item of arr) {
  console.log(item)
  if (item > 100) {
    break
  }
}

const s = new Set(['foo', 'bar', 'zoo'])
for (const item of s) {
  console.log(item)
}

const m = new Map()
m.set('foo', 100)
m.set('bar', true)
m.set({ name: 'gongjian' }, 27)
for (const [key, value] of m) {
  console.log(key, value)
}

const obj = {
  name: 'gongjian',
  age: 26
}

/* for (const item of Object.entrise(obj)) {
  console.log(item)
} */