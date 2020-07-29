// 实现可迭代接口
const obj = {
  store: ['foo', 'bar', 'zoo'],

  [Symbol.iterator]: function () {
    let index = 0
    let self = this

    return {
      next: function () {
        const result = {
          value: self.store[index],
          done: index >= self.store.length
        }
        index++
        return result
      }
    }
  }
}

console.log(obj[Symbol.iterator]().next())

for (const item of obj) {
  console.log('循环体', item)
}